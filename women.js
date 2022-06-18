

 let Namearr = JSON.parse(localStorage.getItem("username")) ;
 Namearr.map(function(ele){
    document.getElementById("login_text").innerText=ele.name;
 })

 
document.querySelector("#sort").addEventListener("change", sortingproduct);
function sortingproduct() {
    let selected = document.getElementById("sort").value;
  
    if (selected == "ascending") {
       let res= womens.sort(function (a, b) {
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
        //  return a.price-b.price;   
    })
    displayPage(res);
    }else if(selected=="descending"){
       let x=womens.sort(function (a, b) {
        if(a.price>b.price) return -1;
        if(a.price<b.price) return 1;
        return 0;
     
    })
   
    displayPage(x);
    }
}



 let womenData = [
	{
	
		image_url: "https://images.bewakoof.com/t320/avoiding-resposibilities-boyfriend-t-shirt-509137-1654873589-1.jpg",
         	head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		price: 299,
        oldPrice:"332"
		
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/take-your-time-boyfriend-t-shirt-509351-1655101069-1.jpg",
         head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		price: 299,
        oldPrice:"324"
		
		
	},
	{
		image_url: "https://images.bewakoof.com/t320/take-your-time-boyfriend-t-shirt-509348-1655101116-1.jpg",
        
		head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
	
		price: "₹299",
        oldPrice:"563"
		
	},
	{
	
		image_url: "https://images.bewakoof.com/t320/everyday-mood-boyfriend-t-shirt-509637-1655131674-1.jpg",
       head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
	   price: 499,
       oldPrice:"678"

		
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/avoiding-resposibilities-boyfriend-t-shirt-509131-1654873610-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 299,
        oldPrice:"458"
		
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/starboi-boyfriend-t-shirt-501434-1653290870-1.jpg",
       head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 588,
	    oldPrice:745
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/avoiding-resposibilities-boyfriend-t-shirt-509131-1654873610-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 546,
		oldPrice:658
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/women-s-black-friends-typography-boyfriend-t-shirt-234669-1651240025-4.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		price: 478,
		oldPrice:"569"
	},
	{
		image_url: "https://images.bewakoof.com/t320/easy-peasy-lemon-squeezy-oversized-fit-t-shirt-499262-1652767523-1.jpg",
           head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 347,
		oldPrice:"658"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/easy-peasy-lemon-squeezy-boyfriend-t-shirt-499263-1652767499-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 324,
		oldPrice:"456"
	},
	{
		
	     image_url: "https://images.bewakoof.com/t320/women-s-busy-doing-nothing-2-0-printed-boyfriend-fit-t-shirt-493074-1652768338-1.jpg",
         head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 345,
		oldPrice:"467"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/bewakoof-customizable-round-neck-t-shirt-443869-1645623784-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 604,
		oldPrice:"890"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/women-s-pink-relaxed-fit-t-shirt-480973-1654171690-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		price: 456,
		oldPrice:"690"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/go-with-the-flow-boyfriend-t-shirt-500259-1652969693-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 790,
		oldPrice:"990"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/women-s-purple-bts-super-loose-t-shirt-468383-1654177209-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 768,
		oldPrice:"904"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/climbing-pocket-panda-473034-1644250668-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 580,
		oldPrice:"783"
	},
	{
				image_url: "https://images.bewakoof.com/t320/worst-enemies-boyfriend-t-shirts-381187-1637996038-1.jpg",
		 head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 519,
		oldPrice:"793"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/melon-berries-all-over-printed-pyjama-287535-1637855586-1.jpg",
		 head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 738,
		oldPrice:"983"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/pageant-blue-varsity-half-sleeve-round-neck-t-shirt-444123-1643282646-1.jpg",
		 head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 720,
		oldPrice:"940"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/misty-pink-black-color-block-plus-size-boyfriend-t-shirt-406752-1653918579-1.jpg",
		 head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 934,
		oldPrice:"1023"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/catpuccino-oversized-fit-t-shirt-500270-1653047686-1.jpg",
		  head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 456,
		oldPrice:"678"
	},
	{
      image_url: "https://images.bewakoof.com/t320/sleepy-head-dl-boyfriend-t-shirt-481842-1648094952-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 780,
		oldPrice:"960"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/meteor-grey-boyfriend-t-shirt-211954-1637996010-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 580,
		oldPrice:"780"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/enjoy-coca-cola-461294-1654172112-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 789,
		oldPrice:"890"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/ww-pop-dcl-473552-1644998307-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
	
		price: 589,
		oldPrice:"786"
	},
	{
		
		image_url: "https://images.bewakoof.com/t320/everyday-mood-short-top-509636-1655131628-1.jpg",
        head: "Bewakoof",
		name: "Women's Black Take Your Time Graphic Printed Boyfriend T-shirt",
		
		price: 579,
		oldPrice:"789"
	}
];
let womens=womenData;
  let addtoCart=JSON.parse(localStorage.getItem("cartlist"))||[];
let wishlistData= JSON.parse(localStorage.getItem("wishlistItem"))|| [];

displayPage(addtoCart)

function displayPage(womenData){
	document.querySelector("#display").innerHTML="";
  womenData.forEach(function(elem){
    let div= document.createElement("div")

    let pic=document.createElement("img")
    pic.setAttribute("src", elem.image_url)
    let name=document.createElement("p")
    name.innerText=elem.name;
    let headDiv= document.createElement("div")
    headDiv.setAttribute("id", "heartbox")
    let heart=document.createElement("img")
    heart.setAttribute("src", "https://images.bewakoof.com/web/Wishlist.svg")
    heart.addEventListener("click", function(){
      wishlist(elem);
    })
    let Head=document.createElement("h4")
    Head.innerText=elem.head
    let priceInBox= document.createElement("div")
    priceInBox.setAttribute("id", "PriceBox")
    let rate=document.createElement("p")
    rate.innerText=elem.price;
    let lastprice=document.createElement("p")
    lastprice.innerText=elem.oldPrice;
    let btn= document.createElement("button")
    btn.innerText="Add To Cart"
    btn.addEventListener("click", function(){
      myData(elem)
    })

    headDiv.append(Head,heart);
    priceInBox.append(rate,lastprice)
    div.append(pic,headDiv,name,priceInBox,btn)
    document.querySelector("#display").append(div)
});
}



function myData(elem){
  if (addtoCart.length == 0) {
    let a = elem;
    a.counter = 1;
    addtoCart.push(a);
}
else {
    let flag = false;
    for (let i = 0; i < addtoCart.length; i++) {
        if (addtoCart[i].image_url == elem.image_url) {
          addtoCart[i].counter++;
            flag = true;
            break;

        }

    } if (flag == false) {
        let a = elem;
        a.counter = 1;
        addtoCart.push(a);
    }

}

//  addtoCart.push(elem)
localStorage.setItem("cartlist", JSON.stringify(addtoCart));
alert("Added to Cart")

}

function wishlist(elem){
  wishlistData.push(elem)
  localStorage.setItem("wishlistItem", JSON.stringify(wishlistData));
  alert("Added To Wishlist")
}

function high(){
  let selectedPriceValue=document.querySelector(".dropbtn").value
  if(selectedPriceValue=="hightolow"){
    mensData.sort(function(a,b){
      return (a.price-b.price)
    })
    displayPage(addtoCart)
  }
}
displayPage(womenData);
