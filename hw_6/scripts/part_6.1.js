// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str_1 = 'hello world';
console.log(str_1.length)
const str_2 = 'lorem ipsum';
console.log(str_2.length)
const str_3 = 'javascript is cool';
console.log(str_3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str_upper_1 = 'hello world';
console.log(str_upper_1.toUpperCase())
const str_upper_2 = 'lorem ipsum';
console.log(str_upper_2.toUpperCase())
const str_upper_3 = 'javascript is cool';
console.log(str_upper_3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const str_lower_1 = 'HELLO WORLD';
console.log(str_lower_1.toLowerCase())
const str_lower_2 = 'LOREM IPSUM';
console.log(str_lower_2.toLowerCase())
const str_lower_3 = 'JAVASCRIPT IS COOL';
console.log(str_lower_3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const dirtyString  = ' dirty string   '
const wordsArray  = dirtyString .split(' ')
const newString  = `${wordsArray [1]} ${wordsArray [2]}`
console.log(newString )

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    return str.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arr_num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const arr_sort = arr_num.map(num => num.toString());
console.log(arr_sort)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (arr, sort) => {
    if (sort === "ascending") {
        return arr.sort((number1, number2) => number1 - number2);
    } else if (sort === "descending") {
        return arr.sort((number1, number2) => number2 - number1);

    } else {
        console.log("Error")
    }
}
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration
const sort_Arr = coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration)
console.log(sort_Arr)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filter_Arr = coursesAndDurationArray.filter((course) => course.monthDuration >= 5)
console.log(filter_Arr)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const map_Arr = coursesAndDurationArray.map((course, index) => course.id = index++)
console.log(map_Arr)
console.log(coursesAndDurationArray)


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

const cards = [
    {
        cardSuit: "hearts",
        color: "red",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    {
        cardSuit: "diamonds",
        color: "red",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    {
        cardSuit: "clubs",
        color: "black",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    {
        cardSuit: "spades",
        color: "black",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    }
];


// - знайти піковий туз
const findAceSpades = cards.filter((card) => card.cardSuit === "spades" && card.cards.includes("Ace"));
console.log(findAceSpades);

// - всі шістки
const findSix = cards.filter((card) => card.cards.includes("6"));
console.log(findSix);

// - всі червоні карти
const findRed = cards.filter((card) =>  card.color === "red");
console.log(findRed);

// - всі буби
const find = cards.filter((card) =>  card.cardSuit === "diamonds");
console.log(findRed);

// - всі трефи від 9 та більше
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт


//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

// Не вийшло...