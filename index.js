// 1. дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет. Если есть - вывести 'есть', если нет - вывести 'нет'.
// /**
//  *
//  * @type {(string|number|boolean)[]}
//  */
// const array = ['a', 2, 'c', true];
// let isElement = false;
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'c') {
//         isElement = true;
//     }
// }
//
// if (isElement) {
//     alert('есть');
// } else {
//     alert('нет');
// }

// 2. необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true, если 'c' есть в массиве, и false - если нет
// /**
//  *
//  * @param arr
//  * @returns {boolean}
//  */
// function hasElem(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'c') {
//             return true;
//         }
//     }
//     return false;
// }
//
// const array = ['a', 2, 'c', true];
// alert(hasElem(array));

// 3. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'
// /**
//  *
//  * @type {number[]}
//  */
//
// function hasElem(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 5) {
//             return true;
//         }
//     }
//     return false;
// }
//
// const array = [1, 2, 3, 4, 5, 6, 5];
// if (hasElem(array)) {
//     alert('да');
// } else {
//     alert('нет');
// }

// 4. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// /**
//  *
//  * @type {number}
//  */
// const num = 31;
// let flag = false;
//
// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         flag = true;
//     }
// }
//
// alert(flag);

// 5. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
/**
 *
 * @type {number[]}
 */
const arr = [1, 2, 3, 3, 4, 5];
let flag = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        flag = true;
    }
}

if (flag) {
    alert('да');
} else {
    alert('нет');
}