// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let numArray = [1, 2, 3, 4, 5];
let stringsArray = ['tomato', 'potato', 'corn', 'pepper', 'cheese'];
let mixedArray = ['pineapple', 17, 15, true, false];

console.log('Масив з 5 числових значень:', numArray);
console.log('Масив з 5 рядкових значень:', stringsArray);
console.log('Масив з 5 значень стрічкового, числового та булевого типу:', mixedArray);


let storageArray = [];

storageArray.push('one');
storageArray.push('tree');
storageArray.push(55);
storageArray.push(44);
storageArray.push(false);
console.log(storageArray);


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let array = [2,17,13,6,22,31,45,66,100,-18]

let count = 0;
while (count < array.length) {
    console.log(array[count]);
    count++;
}


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let j = 0;
while (j < array.length) {
    if (j % 2 !== 0) {
        console.log(array[j]);
    }
    j++;
}

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}


let k = 0;
while (k < array.length) {
    if (array[k] % 2 === 0) {
        console.log(array[k]);
    }
    k++;
}


for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}


for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = "okten";
    }
}
console.log(array);
console.log(array.reverse());

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// Виконаємо всі попередні завдання в оберненому порядку
// 7. Заміна кожного числа кратного 3 на слово "okten"
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = "okten";
    }
}
console.log(array);

// 6. Перебір чисел тільки парних значень за оберненим циклом
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

// 5. Перебір чисел тільки непарних значень за оберненим циклом
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

// 4. Перебір чисел тільки непарних індексів за оберненим циклом
for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}

// 3. Перебір чисел тільки парних індексів за оберненим циклом
for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}

// 2. Перебір циклом for за оберненим циклом
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// 1. Перебір циклом while за оберненим циклом
let i = array.length - 1;
while (i >= 0) {
    console.log(array[i]);
    i--;
}