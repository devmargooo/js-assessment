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
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
};

const insert = function(arr, item, index) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = item;
    return arr;
};

const count = function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
    return count;
};

const duplicates = function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (indexOf(result, current) !== -1) {
            continue;
        }
        if (arr.indexOf(current, i+1) !== -1) {
            result.push(current);
        }
    }
    return result;
};

const square = function(arr) {
    return arr.map(item => item * item);
};

const findAllOccurrences = function(arr, target) {
    const result = [];
    let lastOccurrenceIndex = 0;
    let occurenceIndex = arr.indexOf(target, lastOccurrenceIndex);
    while (occurenceIndex !== -1) {
        result.push(occurenceIndex);
        lastOccurrenceIndex = occurenceIndex;
        occurenceIndex = arr.indexOf(target, lastOccurrenceIndex + 1);
    }
    return result;
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
