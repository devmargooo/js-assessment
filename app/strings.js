exports = typeof window === 'undefined' ? global : window;

const reduceString = function(str, amount) {
  let array = str.split('');
  let index = 1;
  let counter = 1;
  while (index < array.length) {
    const shoud_reduce = array[index] === array[index - 1];
    if (shoud_reduce && counter >= amount) {
      array.splice(index, 1);
      continue;
    }
    counter = shoud_reduce ? counter + 1 : 1;
    index++;

  }
  return array.join('');
};

const wordWrap = function(str, cols) {

};

const reverseString = function(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join('');
};


exports.stringsAnswers = {
  reduceString,
  wordWrap,
  reverseString
};
