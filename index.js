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