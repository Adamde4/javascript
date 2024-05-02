//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно')
}

let a = 0;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

a = -3;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 17;
if (time <= 15) {
    console.log("part 1")
} else if (time > 15 && time <= 30) {
    console.log("part 2")
} else if (time > 30 && time <= 45) {
    console.log("part 3")
} else if (time > 45 && time <= 59) {
    console.log("part 4")
} else {
    console.log("error")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;
if (day <= 10) {
    console.log("first decade")
} else if (day > 10 && day <= 20) {
    console.log("second decade")
} else if (day > 20 && day <= 31) {
    console.log("third decade")
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let i = 3
switch (i) {
    case 1:
        console.log("Study");
        break
    case 2:
        console.log("Relax");
        break;
    case 3:
        console.log("Hard work");
        break
    case 4:
        console.log("Movies")
        break
    case 5:
        console.log("Travel")
        break
    default:
        console.log("error")
}


// Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
let number_one = 17;
let number_two = 15;
if (number_one > number_two) {
    console.log("first number more than second")
} else if (number_one < number_two) {
    console.log("Second number more than second")
} else if (number_one === number_two) {
    console.log("Even numbers")
} else {
    console.log("error")
}


//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x_types = NaN;
if (!x_types) {
    x_types = "default"
}
console.log(x_types)