//store the products array in localstorage as "products"





document.querySelector("form").addEventListener("submit",subform);
var products_arr = JSON.parse(localStorage.getItem("products"))||[];

function subform(){
    event.preventDefault();
     
   var products={

    type :document.getElementById("type").value,
    description : document.getElementById("desc").value,
    price : document.getElementById("price").value,
    image : document.getElementById("image").value,
    }

    products_arr.push(products)
    console.log(products_arr)

    localStorage.setItem("products",JSON.stringify(products_arr))
}
