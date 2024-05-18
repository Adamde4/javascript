// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];

users.push(new User(1, "Alexandr", "Velikiy", "1@example.com", 80671234567));
users.push(new User(2, "Olena", "Petrenko", "2@example.com", 80671234568));
users.push(new User(3, "Ivan", "Ivanov", "3@example.com", 80671234569));
users.push(new User(4, "Maria", "Petrova", "4@example.com", 80671234570));
users.push(new User(5, "Sergiy", "Kovalenko", "5@example.com", 80671234571));
users.push(new User(6, "Natalia", "Stepanova", "6@example.com", 80671234572));
users.push(new User(7, "Petro", "Sidorov", "7@example.com", 80671234573));
users.push(new User(8, "Anna", "Vasileva", "8@example.com", 80671234574));
users.push(new User(9, "Dmytro", "Kovalchuk", "9@example.com", 80671234575));
users.push(new User(10, "Yuliya", "Kovalenko", "10@example.com", 80671234576));

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filter_id = users.filter(user => user.id % 2 === 0);
console.log(filter_id)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sort = users.sort((user1, user2) => user1.id - user2.id);
console.log(sort)




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [];

clients.push(new Client(1, "Alexandr", "Velikiy", "1@example.com", 80671234567, ["Apple", "Cherry"]));
clients.push(new Client(2, "Olena", "Petrenko", "2@example.com", 80671234568, ["Lemon", "Potato"]));
clients.push(new Client(3, "Ivan", "Ivanov", "3@example.com", 80671234569, ["Lemon"]));
clients.push(new Client(4, "Maria", "Petrova", "4@example.com", 80671234570, ["Apple", "Potato", "Cherry"]));
clients.push(new Client(5, "Sergiy", "Kovalenko", "5@example.com", 80671234571, ["Mushroom"]));
clients.push(new Client(6, "Natalia", "Stepanova", "6@example.com", 80671234572, ["Cucumber", "Broccoli"]));
clients.push(new Client(7, "Petro", "Sidorov", "7@example.com", 80671234573, ["Apple", "Cucumber", "Broccoli"]));
clients.push(new Client(8, "Anna", "Vasileva", "8@example.com", 80671234574, ["Cucumber"]));
clients.push(new Client(9, "Dmytro", "Kovalchuk", "9@example.com", 80671234575, ["Apple", "Mushroom"]));
clients.push(new Client(10, "Yuliya", "Kovalenko", "10@example.com", 80671234576, ["Potato", "Lemon", "Cherry"]));

console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sort_growing = clients.sort((client1, client2) => client2.order.length - client1.order.length);
console.log(sort_growing)





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



function Car(model, manufacture, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

Car.prototype.info = function () {
    return `Model - ${this.model}; Manufacture - ${this.manufacture}; Year of manufacture of the car = ${this.year}; Max speed = ${this.maxSpeed}; Engine capacity = ${this.engineCapacity};`
};
Car.prototype.drive = function () {
    return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed + newSpeed
}
Car.prototype.changeYear = function (newValue) {
    return this.year = newValue
}
Car.prototype.addDriver = function (driver) {
    return driver
}

const car = new Car("Skoda", "Volkswagen AG", 2009, 240, 1.6)
car.drive()
console.log(car.info());
console.log(car.increaseMaxSpeed(50));
console.log(car.changeYear(2024))
car.addDriver({name: "Vin ", surname: "Diesel", age: 50, licenseNumber: "ASD123", experienceYears: 49})

const car_for_sale = new Car("Passat B6", "Volkswagen AG", 2023, 250, 2.6);

car_for_sale.drive();
car_for_sale.info();
car_for_sale.increaseMaxSpeed(40);
car_for_sale.drive();
car_for_sale.changeYear(2022);
car_for_sale.info();
car_for_sale.addDriver({ name: "Oleh", age: 19, experience: 1 });
console.log(car_for_sale);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car_constructor {
    constructor(model, manufacture, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
}

Car_constructor.prototype.info = function () {
    return `Model - ${this.model}; Manufacture - ${this.manufacture}; Year of manufacture = ${this.year}; Max speed = ${this.maxSpeed}; Engine capacity = ${this.engineCapacity};`
};
Car_constructor.prototype.drive = function () {
    return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
Car_constructor.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed + newSpeed
}
Car_constructor.prototype.changeYear = function (newValue) {
    return this.year = newValue
}
Car_constructor.prototype.addDriver = function (driver) {
    return driver
}
const car2 = new Car_constructor("Skoda", "Volkswagen AG", 2009, 240, 1.6)
car2.drive()
console.log(car2.info());
console.log(car2.increaseMaxSpeed(50));
console.log(car2.changeYear(2023))
car2.addDriver({name: "Tom", surname: "Holand", age: 30, licenseNumber: "ASD321", experienceYears: 4})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const Cinderella_1 = new Cinderella("Galya", 45, 41);
const Cinderella_2 = new Cinderella("Katya", 12, 32);
const Cinderella_3 = new Cinderella("Svetlana", 22, 35);
const Cinderella_4 = new Cinderella("Myroslava", 25, 36);
const Cinderella_5 = new Cinderella("Zendeya", 18, 34);
const Cinderella_6 = new Cinderella("Sabrina", 23, 34);
const Cinderella_7 = new Cinderella("Olha", 20, 37);
const Cinderella_8 = new Cinderella("Kitnis", 19, 38);
const Cinderella_9 = new Cinderella("Daria", 21, 36);
const Cinderella_10 = new Cinderella("Karin", 20, 35);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// Cinderella.prototype.prince = function (namePrince = "Alexandr", agePrince = 23, shoe = 34) {
//     return {namePrince: namePrince, agePrince: agePrince, shoe: shoe}
// }
class Prince {
    constructor(namePrince, agePrince, shoe) {
        this.namePrince = namePrince;
        this.agePrince = agePrince;
        this.shoe = shoe;
    }
}

const prince = new Prince("Misha", 23, 34);
console.log(prince)


const arrayCinderella = Array(Cinderella_1, Cinderella_2, Cinderella_3, Cinderella_4, Cinderella_5, Cinderella_6, Cinderella_7, Cinderella_8, Cinderella_9, Cinderella_10);
for (const cinderella of arrayCinderella) {
    if (prince.shoe === cinderella.footSize && cinderella.age === prince.agePrince) {
        console.log(`${cinderella.name} is cinderella for prince ${prince.namePrince}`);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const cinderellaWinner = arrayCinderella.find(cinderella => cinderella.footSize === prince.shoe && cinderella.age === prince.agePrince)
console.log(cinderellaWinner)





// Через Array.prototype. створити власний foreach, filter, map
//forEach
const array = [1715, 123, 321, 55, "true", "false"]
Array.prototype.customForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
}
array.customForEach(item => console.log(item));
//filter
Array.prototype.customFilter = function (callback) {
    const arr = []
    for (const item of this) {
        if (callback(item)) {
            arr.push(item)
        }
    }
    return arr
}
array.customFilter(item => typeof item === "string");
//map
const array_map = [11111, 2222, 333, 44]
Array.prototype.customMap = function (callback) {
    const arr = []
    for (const item of this) {
        arr.push(callback(item))
    }
    return arr
}
const res = array_map.customMap(item => item/2);
console.log(res)