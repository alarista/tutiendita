
var deleteProductButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < deleteProductButtons.length; i++) {
    var button = deleteProductButtons[i]
    button.addEventListener('click', removeProduct)
}

function removeProduct(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

var seeOrders = document.getElementById("see_orders")
var seeProducts = document.getElementById("see_products")
var addProduct = document.getElementById("add_product")
var storeProducts = document.getElementById("store_products")
var storeOrders = document.getElementById("store_orders")
var productForm = document.getElementById("product_form")


seeOrders.addEventListener("click", showOrders);
function showOrders(){
    storeProducts.style.display = "none";
    seeOrders.classList.add("active");
    addProduct.classList.remove("active");
    seeProducts.classList.remove("active");
    storeOrders.style.display = "block";
    productForm.style.display = "none";
}

seeProducts.addEventListener("click", showProducts);
function showProducts(){
    storeProducts.style.display = "block";
    seeOrders.classList.remove("active");
    addProduct.classList.remove("active");
    seeProducts.classList.add("active");
    storeOrders.style.display = "none";
    productForm.style.display = "none";
}

addProduct.addEventListener("click", addProducts);
function addProducts(){
    storeProducts.style.display = "none";
    storeOrders.style.display = "none";
    productForm.style.display = "block";
    seeOrders.classList.remove("active");
    seeProducts.classList.remove("active");
    addProduct.classList.add("active");
}





