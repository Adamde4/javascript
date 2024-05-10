// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square = (a, b) => a * b;
console.log(square(15, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
const area_circle = r => Math.PI * Math.pow(r, 2);
console.log(area_circle(25));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const area_cylinder = (h, r) => 2 * Math.PI * r * h + Math.PI * Math.pow(r, 2);
console.log(area_cylinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
const cons_array_elements = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
let array_1 = [15, 25, 45, 85, 115];
cons_array_elements(array_1);

// - створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
const creat_paragraph = text => {
    document.write(`<p>${text}</p>`);
};
creat_paragraph("Hello my little friend!");

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
const creator_li3 = text => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
};
creator_li3("prodam garaz");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const creator_for_li3 = (text, quantity) => {
    document.write("<ul>");
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
};
creator_for_li3("lorem ipsum ....", 5);

// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
const creator_li_array = array => {
    document.write("<ul>");
    for (let i of array) {
        document.write(`<li>${i}</li>`);
    }
    document.write("</ul>");
};
const bad_array = ["Lorem", true, false, "123", 123, "print"];
creator_li_array(bad_array);

// - створити функцію яка приймає масив об'єктів з наступними
// полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const cons_users = users => {
    for (const user of users) {
        document.write(`
            <div>
                <h2>Id: ${user.id}</h2>
                <h2>Name: ${user.name}</h2>
                <h2>Age: ${user.age}</h2>
            </div>
        `);
    }
};
const array_users = [
    { id: 1, name: "Randy", age: 40 },
    { id: 2, name: "John", age: 45 },
    { id: 3, name: "Rey", age: 42 },
    { id: 4, name: "Mark", age: 60 },
    { id: 5, name: "Andre", age: 17 }
];
cons_users(array_users);

// - створити функцію яка повертає найменьше число з масиву
const find_minimum = array => {
    let min_num = array[0];
    for (let number of array) {
        if (number < min_num) {
            min_num = number;
        }
    }
    return min_num;
};
const numbers_array = [178, 99, 98, 15, 50];
console.log(find_minimum(numbers_array));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const sum = array => {
    let sum_array = 0;
    for (let num of array) {
        sum_array += num;
    }
    return sum_array;
};
const arr = [15, 19, 11];
console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
const swap = (arr, index1, index2) => {
    let folder = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = folder;
    return arr;
};
console.log(swap([99, 50, 88, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
const exchange = (UAH, values, valuta) => {
    for (let currency of values) {
        if (currency.currency === valuta) {
            return UAH / currency.value;
        }
    }
    return "Error 404";
};
