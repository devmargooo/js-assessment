exports = typeof window === 'undefined' ? global : window;

const async = function(value) {
  return Promise.resolve(value)
};

const manipulateRemoteData = function(url) {
  return fetch(url)
      .then(result => result.json())
      .then(data => data.people
          .map(item => item.name)
          .sort())
};

const asyncAnswers = {
  async,
  manipulateRemoteData,
};

exports.asyncAnswers = asyncAnswers;
