exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {

    constructor.prototype = {
      greeting
    };
  },

  iterate: function(obj) {
    const res = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res.push(`${key}: ${obj[key]}`)
      }
    }
    return res;
  }
};
