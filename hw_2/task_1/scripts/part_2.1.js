let array = ["Hello", 1, 2, 3, false, true, "Pikachu", "Simpsons", "rock",
    {book: 'Kobzar', author: 'Shvechenko'}]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_one = {
    title: " A Song of Ice and Fire",
    pageCount: 2000,
    genre: "fantastic"
}
let book_two = {
    title: "The Picture of Dorian Gray",
    pageCount: 310,
    genre: "novel"
}
let book_three = {
    title: "Fahrenheit 451",
    pageCount: 500,
    genre: "science fiction dystopia novel"
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: "A Song of Ice and Fire",
    pageCount: 2000,
    genre: "fantastic",
    authors: {name: "George R. R. Martin", age: 75}
}
let book2 = {
    title: "The Picture of Dorian Gray",
    pageCount: 310,
    genre: "novel",
    authors: {name: "Oscar Wilde", age: 46}
}
let book3 = {
    title: "Fahrenheit 451",
    pageCount: 500,
    genre: "science fiction dystopia novel",
    authors: {name: "Ray Douglas Bradbury", age: 91}
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: "Emily",
        username: "Emily_Jonson",
        password: "qwerty123",
    },

    {
        name: "Liam",
        username: "Liam_gallager",
        password: "age_of_empire",
    }, {
        name: "Sophia",
        username: "Sophia111",
        password: "passworord",
    }, {
        name: "Noah",
        username: "Noah_777",
        password: "ggg777",
    }, {
        name: "Olivia",
        username: "Olivia1715",
        password: "beer_lviv",
    }, {
        name: "Jackson",
        username: "Jackson_John",
        password: "pin123",
    }, {
        name: "Emma",
        username: "emma_rodriges",
        password: "spanish#",
    }, {
        name: "Aiden",
        username: "Aiden$$$",
        password: "987654321",
    }, {
        name: "Isabella",
        username: "Isabella.simpson",
        password: "caramba",
    }, {
        name: "Lucas",
        username: "Luc@s123",
        password: "shild3",
    },
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний  масив з 21 значенням вичключаємо одразу

let temperatures = [
    {
        day: "Monday",
        morning: 10,
        afternoon: 17,
        night: 8
    },
    {
        day: "Tuesday",
        morning: 9,
        afternoon: 10,
        night: 7
    },
    {
        day: "Wednesday",
        morning: 11,
        afternoon: 13,
        night: 5
    },
    {
        day: "Thursday",
        morning: 13,
        afternoon: 20,
        night: 16
    },
    {
        day: "Friday",
        morning: 15,
        afternoon: 20,
        night: 13
    },
    {
        day: "Saturday",
        morning: 14,
        afternoon: 18,
        night: 11
    },
    {
        day: "Sunday",
        morning: 12,
        afternoon: 19,
        night: 10
    }
];
