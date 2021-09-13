exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    switch (true) {
      case (!!a && !!b): return true;
      case (!!a && !b): return true;
      case (!a && !!b): return true;
      case (!a && !b): return false;
    }
  },

  and: function(a, b) {
    switch (true) {
      case (!!a && !!b): return true;
      case (!!a && !b): return false;
      case (!a && !!b): return false;
      case (!a && !b): return false;
    }
  }
};
