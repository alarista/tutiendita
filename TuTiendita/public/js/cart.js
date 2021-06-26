var storeEl = document.querySelector('#container3');


async function addToCart(event){
    event.preventDefault();
    var textEl = event.target.textContent;
    // Remove all extra spaces from string src=https://futurestud.io/tutorials/remove-extra-spaces-from-a-string-in-javascript-or-node-js
    let formattedText = textEl.replace(/\s+/g, ' ').trim();
    console.log("Clicking");
    console.log(formattedText);
    if(formattedText === 'Add to cart'){
        let title = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.shop-item-title').textContent.trim();
        let price = event.target.previousElementSibling.textContent;
        let image = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.card-img-top').getAttribute("src");//.slice(8);
        console.log('Adding to the cart');
        console.log('Title: ', title);
        console.log('Price: ', price);
        console.log('Image: ', image);
        addItemToCart(title, price, image);
        updateCartTotal();
    }
}

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
} 

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // var addToCartButtons = document.getElementsByClassName('ip-add-cart')
    // for (var i = 0; i < addToCartButtons.length; i++) {
    //     var button = addToCartButtons[i]
    //     button.addEventListener('click', addToCartClicked)
    // }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked(){
    alert("Thank you for your purchase")
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()

}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

// function addToCartClicked(event){
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal();
// }

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('The product is already in your shopping cart! Please edit (add or remove) directly from your cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100%" height="100%">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">$${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Remove</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        // console.log('price',price);
        // console.log('quiantity',quantity);
        // console.log('total',total)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    // console.log('************END************')
}

updateCartTotal();
storeEl.addEventListener("click", addToCart);
