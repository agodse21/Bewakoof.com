

 let Namearr = JSON.parse(localStorage.getItem("username")) ;
 Namearr.map(function(ele){
    document.getElementById("login_text").innerText=ele.name;
 })


 document.querySelector("#sort").addEventListener("change", sortingproduct);
function sortingproduct() {
    let selected = document.getElementById("sort").value;
  
    if (selected == "ascending") {
       let res= covers.sort(function (a, b) {
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
        //  return a.price-b.price;   
    })
    displayPage(res);
    }else if(selected=="descending"){
       let x=covers.sort(function (a, b) {
        if(a.price>b.price) return -1;
        if(a.price<b.price) return 1;
        return 0;
     
    })
   
    displayPage(x);
    }
}


let mobileData = [
  {
    image_url:
      "https://images.bewakoof.com/t320/batman-rogue-designer-hard-cover-for-xiaomi-redmi-9-power-503047-1653634339-1.jpeg",
    head: "Bewakoof",
    name: "Batman Rogue Designer Hard Cover for Xiaomi Redmi 9 Power",
    price: 249,
    oldPrice: 499,
  },
  {
     image_url:
       "https://images.bewakoof.com/t320/t-rex-roar-designer-hard-cover-for-xiaomi-redmi-9-power-507221-1654858109-1.jpg",
     head: "Bewakoof",
     name: "T-Rex Roar Designer Hard Cover for Xiaomi Redmi 9 Power",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/dekhte-hi-rahoge-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346551-1620679395.jpg",
     head: "Bewakoof",
     name: "Dekhte Hi Rahoge Xiaomi Redmi 9 Power Mobile Cover",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/the-league-designer-hard-cover-for-xiaomi-redmi-9-power-503194-1653635815-1.jpeg",
     head: "Bewakoof",
     name: "The League Designer Hard Cover for Xiaomi Redmi 9 Power",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/mindspace-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-493811-1651244047-1.jpeg",
     head: "Bewakoof",
     name: "Mindspace Ticket Designer Hard Cover for Xiaomi Redmi 9 Power",
     price: 239,
     oldPrice: 599,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/hustle-designer-hard-cover-for-xiaomi-mi-10i-5g-496535-1651742397-1.jpeg",
     head: "Bewakoof",
     name: "Hustle Designer Hard Cover for Xiaomi Mi 10i 5G",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/naruto-stick-designer-hard-cover-for-xiaomi-mi-10i-5g-484298-1649395395-1.jpeg",
     head: "Bewakoof",
     name: "Naruto Stick Designer Hard Cover for Xiaomi Mi 10i 5G",
     price: 349,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/biker-swag-xiaomi-mi-10i-5g-mobile-cover-xiaomi-mi-10i-5g-mobile-covers-368518-1623649718.jpg",
     head: "Bewakoof",
     name: "Biker Swag Xiaomi Mi 10i 5G Mobile Cover",
     price: 199,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/pirate-king-designer-hard-cover-for-xiaomi-mi-11-ultra-494334-1651158307-1.jpeg",
     head: "Bewakoof",
     name: "Pirate King Designer Hard Cover for Xiaomi Mi 11 Ultra",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/minion-wires-xiaomi-mi-11-ultra-mobile-cover-465562-1642688351-1.jpg",
     head: "Bewakoof",
     name: "Minion Wires Xiaomi Mi 11 Ultra Mobile Cover",
     price: 349,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/pirate-king-designer-hard-cover-for-xiaomi-mi-11-ultra-494334-1651158307-1.jpeg",
     head: "Bewakoof",
     name: "Pirate King Designer Hard Cover for Xiaomi Mi 11 Ultra",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/the-mouse-designer-hard-cover-for-xiaomi-mi-10t-499958-1652969902-1.jpeg",
     head: "Bewakoof",
     name: "The Mouse Designer Hard Cover for Xiaomi Mi 10T",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/raptor-eye-designer-hard-cover-for-xiaomi-mi-10t-507090-1654858635-1.jpg",
     head: "Bewakoof",
     name: "Raptor Eye Designer Hard Cover for Xiaomi Mi 10T",
     price: 299,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/peek-out-xiaomi-mi-10t-mobile-cover-xiaomi-mi-10t-mobile-covers-352882-1620682385.jpg",
     head: "Bewakoof",
     name: "Peek Out Xiaomi Mi 10T Mobile Cover",
     price: 199,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/sarcasm-designer-hard-cover-for-redmi-k20-pro-494071-1651244613-1.jpeg",
     head: "Bewakoof",
     name: "Sarcasm Designer Hard Cover for Redmi K20 Pro",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/weather-map-printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498820-1652930487-1.jpg",
     head: "Bewakoof",
     name: "Weather Map Designer Hard Cover for OnePlus 9R",
     price: 299,
     oldPrice: 399,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/sarcastic-bunny-designer-hard-cover-for-oneplus-9r-500672-1653912445-1.jpg",
     head: "Bewakoof",
     name: "Sarcasti Bunny Designer Hard Cover for OnePlus 9R",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/street-signals-printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498818-1652930372-1.jpg",
     head: "Bewakoof",
     name: "Street Signals Designer Hard Cover for OnePlus 9R",
     price: 299,
     oldPrice: 399,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/yogi-panda-designer-hard-cover-for-oneplus-9-500801-1653911348-1.jpg",
     head: "Bewakoof",
     name: "Yogi Panda Designer Hard Cover for OnePlus 9",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/panda-scooter-designer-hard-cover-for-oneplus-9-484370-1649397121-1.jpeg",
     head: "Bewakoof",
     name: "Panda Scooter Designer Hard Cover for OnePlus 9",
     price: 349,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/quirky-camou-oneplus-9-mobile-cover-472225-1643643854-1.jpg",
     head: "Bewakoof",
     name: "Quirky Camou Designer Hard Cover for OnePlus 9",
     price: 199,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/green-marble-designer-hard-cover-for-oneplus-8-pro-493500-1651244585-1.jpeg",
     head: "Bewakoof",
     name: "Green Marble Designer Hard Cover for OnePlus 8 Pro",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/need-space-teddy-designer-hard-cover-for-oneplus-8-pro-510505-1655359809-1.jpg",
     head: "Bewakoof",
     name: "Need Space Taddy Designer Hard Cover for OnePlus 8 Pro",
     price: 299,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/dark-camo-oneplus-8-pro-mobile-cover-oneplus-8-pro-mobile-covers-301931-1620673137.jpg",
     head: "Bewakoof",
     name: "Dark Camo Designer Hard Cover for OnePlus 8 Pro",
     price: 199,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/music-printed-designer-hard-cover-for-oneplus-8t-impact-resistant-matte-finish-498805-1652930466-1.jpg",
     head: "Bewakoof",
     name: "Music Printed Designer Hard Cover for OnePlus 8T",
     price: 299,
     oldPrice: 399,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/new-york-printed-designer-hard-cover-for-oneplus-8t-impact-resistant-matte-finish-498780-1652930434-1.jpg",
     head: "Bewakoof",
     name: "New York Printed Designer Hard Cover for OnePlus 8T",
     price: 299,
     oldPrice: 399,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/printed-designer-hard-cover-for-oneplus-8t-impact-resistant-matte-finish-498795-1652930153-1.jpg",
     head: "Bewakoof",
     name: "Printed Designer Hard Cover for OnePlus 8T",
     price: 299,
     oldPrice: 399,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/naruto-stick-designer-hard-cover-for-oneplus-8-484232-1649397263-1.jpeg",
     head: "Bewakoof",
     name: "Naruto Stick Designer Hard Cover for OnePlus 8",
     price: 399,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/dark-florals-oneplus-8-mobile-cover-oneplus-8-mobile-covers-283251-1599120900.jpg",
     head: "Bewakoof",
     name: "Dark Florals Designer Hard Cover for OnePlus 8",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/wasnt-me-oneplus-8-mobile-cover-oneplus-8-mobile-covers-298939-1604992612.jpg",
     head: "Bewakoof",
     name: "Wasnt Me Designer Hard Cover for OnePlus 8",
     price: 199,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/my-thing-multicolor-printed-hard-back-case-for-oneplus-nord-452608-1637770488-1.jpg",
     head: "Bewakoof",
     name: "Multicolor Printed Designer Hard Cover for OnePlus Nord",
     price: 249,
     oldPrice: 599,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/madara-designer-hard-cover-for-oneplus-nord-510393-1655360821-1.jpg",
     head: "Bewakoof",
     name: "Muadara Designer Hard Cover for OnePlus Nord",
     price: 299,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/420-organic-mc-designer-hard-cover-for-oneplus-nord-483836-1649395870-1.jpeg",
     head: "Bewakoof",
     name: "420 organic MC Designer Hard Cover for OnePlus Nord",
     price: 249,
     oldPrice: 499,
   },
   {
     image_url:
       "https://images.bewakoof.com/t320/mickey-face-designer-hard-cover-for-iphone-13-pro-max-497870-1652422334-1.jpeg",
     head: "Bewakoof",
     name: "Mickey Face Designer Hard Cover for iPhone 13 pro Max",
     price: 249,
     oldPrice: 499,
   },
  ];
  let covers= mobileData;
  let addtoCart=JSON.parse(localStorage.getItem("cartlist"))||[];
let wishlistData= JSON.parse(localStorage.getItem("wishlistItem"))|| [];

displayPage(addtoCart)

function displayPage(mobileData){
	document.querySelector("#display").innerHTML="";
  mobileData.forEach(function(elem){
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
displayPage(mobileData);