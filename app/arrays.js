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

};

const removeWithoutCopy = function(arr, item) {

};

const append = function(arr, item) {

};

const truncate = function(arr) {

};

const prepend = function(arr, item) {

};

const curtail = function(arr) {

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
