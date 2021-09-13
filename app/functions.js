exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(window, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
      return function (new_str) {
          return str + ', ' + new_str;
      }
  },

  makeClosures: function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(fn.bind(null, arr[i]));
    }
    for (let i = 0; i < arr.length; i++) {
    }
    return res;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
