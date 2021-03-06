var cardEl = document.querySelector('#container4');

async function removeProduct(event) {
  event.preventDefault();
  var buttonClicked = event.target;
  var textEl = event.target.textContent;
  // console.log(textEl);
  if(textEl === 'Erase it'){
    var productName = event.target.parentElement.firstElementChild.textContent.trim();
    buttonClicked.parentElement.parentElement.remove();
    console.log("Product name:", productName);
    // console.log('Clicked a card');
    if (productName) {
      productName = productName.replace("%", "_");
      const response = await fetch("/api/products/" + productName, {
        method: "DELETE",
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        // document.location.replace("/");
        alert("Failed to delete product.");
       } //else {
      //   alert("Failed to add product.");
      // }
    }
  } 
}

var seeOrders = document.getElementById("see_orders");
var seeProducts = document.getElementById("see_products");
var addProduct = document.getElementById("add_product");
var storeProducts = document.getElementById("store_products");
var storeOrders = document.getElementById("store_orders");
var productForm = document.getElementById("product_form");

seeOrders.addEventListener("click", showOrders);
function showOrders() {
  storeProducts.style.display = "none";
  seeOrders.classList.add("active");
  addProduct.classList.remove("active");
  seeProducts.classList.remove("active");
  storeOrders.style.display = "block";
  productForm.style.display = "none";
}

seeProducts.addEventListener("click", showProducts);
function showProducts() {
  storeProducts.style.display = "block";
  seeOrders.classList.remove("active");
  addProduct.classList.remove("active");
  seeProducts.classList.add("active");
  storeOrders.style.display = "none";
  productForm.style.display = "none";
}

addProduct.addEventListener("click", addProducts);
function addProducts() {
  storeProducts.style.display = "none";
  storeOrders.style.display = "none";
  productForm.style.display = "block";
  seeOrders.classList.remove("active");
  seeProducts.classList.remove("active");
  addProduct.classList.add("active");
}

var registerNewProduct = document.getElementById("done_button");

const ProductFormHandler = async (event) => {
  event.preventDefault();

  const productTitle = document.querySelector("#new_product_name").value.trim();
  const productPrice = document
    .querySelector("#new_product_price")
    .value.trim();
  const productStock = document
    .querySelector("#new_product_stock")
    .value.trim();
  const productCategory = document.querySelector("#inputState").value.trim();
  const productImg = document.querySelector("#new_product_img").value.trim();
  console.log(productTitle);

  if (
    productTitle &&
    productPrice &&
    productStock &&
    productCategory &&
    productImg
  ) {
    const response = await fetch("/api/stores/1", {
      method: "POST",
      body: JSON.stringify({
        productTitle,
        productPrice,
        productStock,
        productCategory,
        productImg,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add product.");
    }
  }
};

const ProductFormDeleter = async (event) => {
  event.preventDefault();

  if (findURL) {
    const response = await fetch("/api/products/" + findURL, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add product.");
    }
  }
};


cardEl.addEventListener("click", removeProduct);
registerNewProduct.addEventListener("click", ProductFormHandler);
