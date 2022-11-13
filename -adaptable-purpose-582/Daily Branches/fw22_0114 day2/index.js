
  let bag = [];
  let cartItems= JSON.parse(localStorage.getItem("cartPro"))||[];
    fetch("https://636a3a78b10125b78fd476bc.mockapi.io/products").then((res)=>res.json()).then((data)=>{displayCard(data),(bag=data)} ).catch((err)=>alert(err));


    function displayCard(data){
      document.querySelector("#con").innerHTML=null;
        data.forEach(element => {
            let div = document.createElement("div");


        let img = document.createElement("img");
        img.setAttribute("src",element.avatar);


        let title = document.createElement("h2");
        title.innerText=element.title;


        let price = document.createElement("h4");
        price.innerText= "$  " + element.Price;


        let dis = document.createElement("p");
        dis.innerText=element.Description;

        let btn = document.createElement("button");
        btn.innerText="Add To Cart"
        btn.addEventListener("click",function(){
           cartItems.push(element);
           localStorage.setItem("cartPro",JSON.stringify(cartItems));
        });


        div.append(img,title,price,dis,btn);


        document.querySelector("#con").append(div);


        });
        
    }

    function search(){
       
     let x =   document.querySelector("input").value;
    
    let newData = bag.filter(function(element){
        return element.title.toLowerCase().includes(x.toLocaleLowerCase());
    });
   
   displayCard(newData)
    }

    const selectElement = document.querySelector('#sort_by_price');
    selectElement.addEventListener('change', (event) => {
let res =document.getElementById("sort_by_price").value;
//console.log(res);
if(res === "asc"){
  bag.sort((a,b)=>a.Price-b.Price);
}
if(res === "desc"){
  bag.sort((a,b)=>b.Price-a.Price);
}
displayCard(bag);
});


