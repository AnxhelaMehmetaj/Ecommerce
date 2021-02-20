var p1 = new Object();
p1.name = "Headphones";
p1.price = "8.99";
p1.url = "images/product1.jpg";

var p2 = new Object();
p2.name = "camera";
p2.price = "6.99";
p2.url = "images/product2.jpg";

var p3 = new Object();
p3.name = "Shampoo";
p3.price = "4.99";
p3.url = "images/p3.jpg";

var p4 = new Object();
p4.name = "Conditioner";
p4.price = "5.99";
p4.url = "images/p4.jpg";

var p5 = new Object();
p5.name = "Sharpie";
p5.price = "6.99";
p5.url = "images/p5.jpg";


var p6 = new Object();
p6.name = "Hand sanitizer";
p6.price = "3.45";
p6.url = "images/p6.jpg";

var p7 = new Object();
p7.name = "Notebook";
p7.price = "3.45";
p7.url = "images/p7.jpg";

var items = [ p1,p2, p3,p4,p5, p6, p7 ];
var itemsSort = [p1,p2, p3, p4, p5, p6, p7
];


function displayItems(arrayOfItems){

    document.getElementById("content-contain").innerHTML="";
    for (i in arrayOfItems){
        document.getElementById("content-contain").innerHTML +=
            '<div class = "card"> <a href="productPage.html"><div class = "item-description">' + arrayOfItems[i].name + '</div><img class="item-img" src = "' + arrayOfItems[i].url + '"><div class="item-description">$' +  arrayOfItems[i].price + '</div></a></div>';

    }
}

function sortChange(){
    var selection = document.getElementById("orderBy").value;


    if (selection === ""){
        displayItems(items);
    }

    if (selection === "name"){
        itemsSort.sort(function(a,b){return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
        displayItems(itemsSort);
    }

    if (selection === "price"){
        itemsSort.sort(function(a,b){return a.price - b.price});
        displayItems(itemsSort);
    }



}

displayItems(items);