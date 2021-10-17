exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const regex = /\d/;
    return regex.test(str);
  },

  containsRepeatingLetter: function(str) {
    const regex = /([A-z])(\1)/;
    return regex.test(str);
  },

  endsWithVowel: function(str) {
    const regex = /[aeiou]$/i;
    return regex.test(str);
  },

  captureThreeNumbers: function(str) {
    const regex = /\d{3}/;
    const result = str.match(regex);
    return result ? result[0] : false;
  },

  matchesPattern: function(str) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    const result = str.match(regex);
    return !!result;
  },

  isUSD: function(str) {
    const regex = /^\$\d{1,3},?(\d{3},?)*(\.\d{2})?$/;
    return regex.test(str);
  }
};
