exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        let initial = start;

        const timer = setInterval(tick, 100);
        tick();
        function tick () {
            console.log(initial);
            initial++;
            if (initial > end) {
                clearInterval(timer);
            }
        }

        return {
            cancel: () => clearInterval(timer)
        }
    }
};
