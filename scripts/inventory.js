var products_arr=JSON.parse(localStorage.getItem("products"));

display(products_arr);

function display(data){
    console.log(data)
    document.querySelector("#all_products").innerHTML="";
     

    data.forEach(function(ele,index){
        let card = document.createElement("div");

        let type = document.createElement("h2");
        type.innerText=ele.type;
        let description = document.createElement("h2");
        description.innerText=ele.description;
        let price = document.createElement("h2");
        price.innerText=ele.price;
        let image = document.createElement("img");
        image.src=ele.image;
        image.style.height="200px";
        image.style.width="200px";
        let btn = document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","remove_product")
        btn.addEventListener("click",function(){
              data.splice(index,1);
              display(data);
              localStorage.setItem("products",JSON.stringify(data));
        })
        card.append(image,type,description,price,btn);
        document.querySelector("#all_products").append(card);
    })
}
 

