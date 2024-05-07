// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let text = "Lorem ipsum dolor...";

for (let i = 0; i < 10; i++) {
    document.write("<div>");
    document.write(text);
    document.write("</div>");
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let j = 0; j < 10; j++) {
    document.write("<div>");
    document.write("INDEX Lorem ipsum dolor..." + j);
    document.write("</div>");
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let count = 0;
while (count < 20) {
    document.write("<h1>Text h1</h1>");
    count++;
}

// можна і через for...
// for (let i = 0; i < 20; i++) {
//     document.write("<h1>Text h1</h1>");
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
count = 0; //вже оголошена змінна, набуває значення 0

while (count < 20) {
    document.write("<h1> INDEX Lorem ipsum h1. " + count + "</h1>");
    count++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>");
for (let i = 0; i < listOfItems.length; i++) {
    document.write("<li>" + listOfItems[i] + "</li>");
}
    document.write("</ul>")

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write('<div class="product-card">');
    document.write('<h3 class="product-title">' + product.title.toUpperCase() + '. Price - ' + product.price + '</h3>');
    document.write('<img src="' + product.image + '" alt="" class="product-image">');
    document.write('</div>');
}

//за допомоги циклу вивести:
//     - користувачів зі статусом true
//     - користувачів зі статусом false
//     - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<h2>true users:</h2>');
document.write('<ul>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write('<li>' + users[i].name + '</li>');
    }
}
document.write('</ul>');


document.write('<h2> false users:</h2>');
document.write('<ul>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write('<li>' + users[i].name + '</li>');
    }
}
document.write('</ul>');


document.write('<h2>users 30+:</h2>');
document.write('<ul>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write('<li>' + users[i].name + '</li>');
    }
}
document.write('</ul>');