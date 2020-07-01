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