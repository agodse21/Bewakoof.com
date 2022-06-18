let Namearr = JSON.parse(localStorage.getItem("username")) ;
Namearr.map(function(ele){
   document.getElementById("login_text").innerText=ele.name;
})



document.querySelector("#sort").addEventListener("change", sortingproduct);
function sortingproduct() {
    let selected = document.getElementById("sort").value;
  
    if (selected == "ascending") {
       let res= mens.sort(function (a, b) {
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
        //  return a.price-b.price;   
    })
    displayPage(res);
    }else if(selected=="descending"){
       let x=mens.sort(function (a, b) {
        if(a.price>b.price) return -1;
        if(a.price<b.price) return 1;
        return 0;
       
    //    mens.sort(function (a, b) {
    //      return b.price-a.price;   
    })
   
    displayPage(x);
    }
}



//   {
//     image: "  https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6696326/2018/9/27/6b18ac6a-ef42-46dd-9b8b-2c5fa47e84711538044457122-Roadster-Men-Blue-Regular-Fit-Faded-Casual-Shirt-96415380444-1.jpg",
//     company: "ROADSTER", type: "Men Slim fit shirt", price: "999", id: 1
// },


let mensData = [
  {
    image_url:
      "https://images.bewakoof.com/t320/killmonger-half-sleeve-t-shirt-509349-1655101044-1.jpg",
    head: "Bewakoof",
    name: "Men's Black Killmonger Graphic Printed T-shirt",
    price: 299,
    oldPrice: "₹999",
  },
  {
      image_url:
        "https://images.bewakoof.com/t320/killmonger-oversized-fit-t-shirt-509357-1655101091-1.jpg",
      head: "Bewakoof",
      name: "Men's Olive Killmonger Graphic Printed Oversized T-shirt",
      price: 499,
      oldPrice: "₹1299",
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/men-s-black-kalyug-age-of-machines-graphic-printed-t-shirt-509633-1655211307-1.jpg",
      head: "Bewakoof",
      name: "Men's Black Kalyug Age of Machines Graphic Printed T-shirt",
      price: 299,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/bugs-bunny-circle-half-sleeve-t-shirt-499256-1652767566-1.jpg",
      head: "Bewakoof",
      name: "Men's Blue Bugs Bunny Circle Graphic Printed T-shirt",
      price: 399,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/black-full-sleeve-henley-t-shirt-405279-1642406816-1.jpg",
      head: "Bewakoof",
      name: "Black Full Sleeve Henley T-shirt",
      price: 499,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/area-51-keep-out-half-sleeve-t-shirt-498377-1652418946-1.jpg",
      head: "Bewakoof",
      name: "Men's Black Area 51 Keep Out Graphic Printed T-shirt",
      price: 449,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/hangin-astronaut-half-sleeve-t-shirt-500322-1652972010-1.jpg",
      head: "Bewakoof",
      name: "Men's Black Hangin Astronaut Graphic Printed T-shirt",
      price: 399,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1653031889-1.jpg",
      head: "Bewakoof",
      name: "White Half Sleeve T-Shirt",
      price: 349,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/men-s-pink-kalyug-age-of-machines-graphic-printed-hoodie-t-shirt-509638-1655211282-1.jpg",
      head: "Bewakoof",
      name: "Men's Pink Kalyug Age of Machines Graphic Printed Hoodie T-shirt",
      price: 449,
      oldPrice: "₹1299",
    },
    {
      image_url:"https://images.bewakoof.com/t320/men-s-black-elite-ninja-t-shirt-386570-1649687693-5.jpg",
      head: "Bewakoof",
      name: "Men's Black Elite Ninja T-shirt",
      price: 449,
      oldPrice: "₹799",
    },
    {
      image_url:"https://images.bewakoof.com/t320/marvel-s-moon-knight-half-sleeve-t-shirt-483814-1648618777-1.jpg",
      head: "Bewakoof",
      name: "Men's Blue Marvel Moon Knight Graphic Printed T-shirt",
      price: 449,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/the-traveller-full-sleeve-t-shirt-276528-1638212427-1.jpg",
      head: "Bewakoof",
      name: "The Traveller Full Sleeve T-Shirt",
      price: 449,
      oldPrice: "₹1299",
    },

    {
      image_url:"https://images.bewakoof.com/t320/blue-vibes-half-sleeve-t-shirt-black-298517-1637995543-1.jpg",
      head: "Bewakoof",
      name: "Blue Vibes Half Sleeve T-Shirt Black",
      price: 349,
      oldPrice: "₹1099",
    },
    {
      image_url:"https://images.bewakoof.com/t320/white-full-sleeve-t-shirt-1093-1637995974-1.jpg",
      head: "Bewakoof",
      name: "Men's White T-shirt",
      price: 349,
      oldPrice: "₹1199",
    },
    {
      image_url:"https://images.bewakoof.com/t320/need-space-teddy-half-sleeve-t-shirt-496045-1651841323-1.jpg",
      head: "Bewakoof",
      name: "Men's Black I Need Some Space Teddy Graphic Printed T-shirt",
      price: 449,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/batman-outline-logo-full-sleeve-t-shirt-bml-black-283891-1638711628-1.jpg",
      head: "Bewakoof",
      name: "Batman Outline Logo Full Sleeve T-Shirt (BML) Black",
      price: 349,
      oldPrice: "₹1299",
    },
    {
      image_url:"https://images.bewakoof.com/t320/bewakoof-men-powerful-people-half-sleeve-round-neck-t-shirt-503807-1654085234-1.jpg",
      head: "Bewakoof",
      name: "Men's Black Powerful People Make Powerful Places Graphic Printed T-shirt",
      price: 499,
      oldPrice: "₹849",
    },
    {
      image_url:"https://images.bewakoof.com/t540/men-s-blue-busy-doing-nothing-t-shirt-287587-1651248151-1.jpg",
      head: "Bewakoof",
      name: "Men's Blue Busy Doing Nothing T-shirt",
      price: 399,
      oldPrice: "₹1099",
    },
    {
      image_url:"https://images.bewakoof.com/t320/iron-face-half-sleeve-t-shirt-avl-black-374205-1635869092-5.jpg",
      head: "OFFICIAL MARVEL MERCHANDISE",
      name: "Men's Black Iron Face T-shirt",
      price: 399,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/navy-blue-half-sleeve-t-shirt-115-1646674268-1.jpg",
      head: "Bewakoof",
      name: "Men's Blue T-shirt",
      price: 349,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/navy-blue-full-sleeve-t-shirt-1092-1637269396-2.jpg",
      head: "Bewakoof",
      name: "Men's Blue T-shirt",
      price: 349,
      oldPrice: "₹1199",
    },
    {
      image_url:"https://images.bewakoof.com/t320/hope-street-half-sleeve-t-shirt-500392-1652969668-1.jpg",
      head: "Bewakoof",
      name: "Men's Black Hope Street Typography T-shirt",
      price: 349,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/men-s-green-yeh-dil-maange-more-t-shirt-391624-1649687896-5.jpg",
      head: "Bewakoof",
      name: "Men's Blue Crewneck Varsity Rib Relaxed Fit T-shirt",
      price: 349,
      oldPrice: "₹699",
    },
    {
      image_url:"https://images.bewakoof.com/t320/dark-navy-crewneck-varsity-rib-half-sleeves-t-shirt-men-s-plain-crewneck-varsity-rib-h-s-t-shirt-272306-1599133855.jpg",
      head: "Bewakoof",
      name: "Men's Green Yeh Dil Maange More T-shirt",
      price: 275,
      oldPrice: "₹799",
    },
    {
      image_url:"https://images.bewakoof.com/t320/funk-peace-half-sleeve-t-shirt-black-344119-1635869530-4.jpg",
      head: "Bewakoof",
      name: "Men's Black Funk Peace T-shirt",
      price: 275,
      oldPrice: "₹799",
    },
    {
      image_url:"https://images.bewakoof.com/t320/spaceman-round-neck-vest-509670-1655218067-1.jpg",
      head: "Bewakoof",
      name: "Men's Blue Spaceman Graphic Printed Vest",
      price: 299,
      oldPrice: "₹999",
    },
    {
      image_url:"https://images.bewakoof.com/t320/game-over-minimal-half-sleeve-t-shirt-navy-blue-305202-1637855533-1.jpg",
      head: "Bewakoof",
      name: "Game Over Minimal Half Sleeve T-Shirt Navy Blue",
      price: 449,
      oldPrice: "₹1099",
    },
    {
      image_url:"https://images.bewakoof.com/t540/men-s-black-iron-man-of-war-t-shirt-220650-1651248014-1.jpg",
      head: "OFFICIAL MARVEL MERCHANDISE",
      name: "Men's Black Iron Man Of War T-shirt",
      price: 349,
      oldPrice: "₹1099",
    },
    {
      image_url:"https://images.bewakoof.com/t320/men-joker-stare-bml-gid-plus-size-half-sleeve-t-shirt-507513-1655122087-1.jpg",
      head: "Bewakoof",
      name: "Men's Black Joker stare (BML) (GID) Graphic Printed Plus Size T-shirt",
      price: 599,
      oldPrice: "₹949",
    },
    {
      image_url:"https://images.bewakoof.com/t320/witcher-ability-half-sleeve-t-shirt-390553-1640087172-6.jpg",
      head: "Bewakoof",
      name: "Men's Black Witcher Ability T-shirt",
      price: 275,
      oldPrice: "₹799",
    },
    {
      image_url:"https://images.bewakoof.com/t540/friends-logo-half-sleeve-t-shirt-frl-234662-1637855459-1.jpg",
      head: "OFFICIAL FRIENDS MERCHANDISE",
      name: "Men's Black Friends Logo T-shirt",
      price: 349,
      oldPrice: "₹1099",
    },
    {
      image_url:"https://images.bewakoof.com/t320/men-s-white-iron-man-grafitti-oversized-t-shirt-466330-1649266187-1.jpg",
      head: "OFFICIAL MARVEL MERCHANDISE",
      name: "Men's White Mech Strike Chest Printed Oversized Fit T-shirt",
      price: 499,
      oldPrice: "₹999",
    },
  
];
let mens=mensData;

let addtoCart=JSON.parse(localStorage.getItem("cartlist"))||[];
let wishlistData= JSON.parse(localStorage.getItem("wishlistItem"))|| [];





function displayPage(mensData){
  document.querySelector("#display").innerHTML="";
  mensData.forEach(function(elem){
   
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
displayPage(mensData);

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