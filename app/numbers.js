exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
    let result = 0;
    let degree = 1;
    for (let i = str.length - 1; i >=0 ; i--) {
      const number = parseInt(str[i], 10);
      result += number * degree;
      degree *= 2;
    }
    return result;
  },

  convertToBinary: function(num) {
    let result = [];
    do {
      result.unshift(num % 2);
      num = Math.floor(num / 2);
    } while (num);
    while (result.length < 8) {
      result.unshift(0);
    }
    return result.join('');
  },

  multiply: function(a, b) {
    let rank = 0;
    let temp = b;
    while (temp < 1) {
      temp *= 10;
      rank++;
    }
    return +(a*b).toFixed(rank);
  }
};
