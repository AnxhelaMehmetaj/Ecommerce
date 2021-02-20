var p1 = new Object();
p1.name = "Headphones";
p1.price = "8.99";
p1.url = "images/product1.jpg";
p1.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";


var p2 = new Object();
p2.name = "camera";
p2.price = "6.99";
p2.url = "images/product2.jpg";
p2.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";

var p3 = new Object();
p3.name = "Shampoo";
p3.price = "4.99";
p3.url = "images/p3.jpg";
p3.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";

var p4 = new Object();
p4.name = "Conditioner";
p4.price = "5.99";
p4.url = "images/p4.jpg";
p4.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";

var p5 = new Object();
p5.name = "Sharpie";
p5.price = "6.99";
p5.url = "images/p5.jpg";
p5.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";


var p6 = new Object();
p6.name = "Paper";
p6.price = "1.45";
p6.url = "images/p6.jpg";
p6.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";

var p7 = new Object();
p7.name = "Notebook";
p7.price = "3.45";
p7.url = "images/p7.jpg";
p7.desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis sed diam condimentum efficitur in eget tellus. Fusce tincidunt interdum massa, in fermentum leo tincidunt vitae. Maecenas sagittis varius metus id consectetur. Nulla condimentum, quam mollis laoreet rutrum, neque odio congue diam, sed pulvinar lectus mauris eget massa. Curabitur interdum convallis sem at pellentesque.";



var items = [ p1,p2, p3,p4,p5, p6, p7 ];

var container = document.getElementById("details");


randomNumber = Math.floor(Math.random() * Math.floor(items.length));

container.innerHTML = "<div class='img-wrapper'>" +
    "<img src=' " + items[randomNumber].url + " '></div>" +
    "<div class='productDetails'><h2>" + items[randomNumber].name + "</h2>" +
    "<h3>" + items[randomNumber].price + "</h3><p>" + items[randomNumber].desc + "</p>" +
    "<button>Add to Cart</button></div>";