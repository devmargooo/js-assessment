exports = typeof window === 'undefined' ? global : window;

const indexOf = function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

const sum = function(arr) {
    return arr.length === 1 ? arr[0] : arr[0] + arraysAnswers.sum(arr.slice(1))
};

const remove = function(arr, item) {
    let array = [...arr];
    while (indexOf(array, item) !== -1) {
        array.splice(indexOf(array, item), 1);
    }
    return array;
};

const removeWithoutCopy = function(arr, item) {
    let originalPointer = 0, actualPointer = 0;
    while (originalPointer < arr.length) {
        if (arr[originalPointer] !== item) {
            arr[actualPointer] = arr[originalPointer];
            actualPointer++;
            originalPointer++;
            continue;
        }
        originalPointer++;
    }

    arr.splice(actualPointer, 4);
    return arr;
};

const append = function(arr, item) {
    arr[arr.length] = item;
    return arr;
};

const truncate = function(arr) {
    arr.splice(arr.length - 1);
    return arr;
};

const prepend = function(arr, item) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr;
};

const curtail = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.splice(arr.length - 1);
    return arr;
};

const concat = function(arr1, arr2) {

};

const insert = function(arr, item, index) {

};

const count = function(arr, item) {

};

const duplicates = function(arr) {

};

const square = function(arr) {

};

const findAllOccurrences = function(arr, target) {

};

const arraysAnswers = {
    indexOf,
    sum,
    remove,
    removeWithoutCopy,
    append,
    truncate,
    prepend,
    curtail,
    concat,
    insert,
    count,
    duplicates,
    square,
    findAllOccurrences
};

exports.asyncAnswers = arraysAnswers;
