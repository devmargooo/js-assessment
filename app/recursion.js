exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
    listFiles: function(data, dirName) {
        let result = [];
        const node = dirName ? findNode(data, dirName) : data;
        list(node);
        function findNode(start, target) {
            const queue = [start];
            while (queue.length) {
                const current = queue.shift();
                if (current.dir === target) {
                    return current;
                }
                const files = current.files;
                for (let i = 0; i < files.length; i++) {
                    if (files[i].dir) {
                        queue.push(files[i])
                    }
                }
            }
        }
        function list(node) {
            const files = node.files;
            for (let i = 0; i < files.length; i++) {
                if (!files[i].dir) {
                    result.push(files[i]);
                } else {
                    list(files[i]);
                }
            }
        }
        return result;
    },

    permute: function(arr) {

    },

    fibonacci: function(n) {
        if (n === 1 || n === 2) {
            return 1;
        }
        const arr = [1, 1];
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 2] + arr[i - 1])
        }
        return arr[arr.length - 1];
    },

    validParentheses: function(n) {
        var operations = [
            function wrap (s) { return '(' + s + ')'; },
            function prepend (s) { return '()' + s; },
            function append (s) { return s + '()'; }
        ];

        var range = function (n) {
            var r = [];
            for (var i = 0; i < n; i ++) { r.push(i); }
            return r;
        };

        var lookup = function (a) { return function (i) { return a[i]; }; };

        var buildWorkItem = function (i) {
            var inOtherBase = Number(i).toString(operations.length);
            while (inOtherBase.length < operations.length) { inOtherBase = "0" + inOtherBase; }
            return inOtherBase.split('').map(lookup(operations));
        };

        var processWorkItem = function (workItem) {
            return workItem.reduce(function (s, wi) { return wi(s); }, '');
        };

        var toSet = function (s, ps) { s[ps] = ps; return s; };

        var keys = function (o) {
            var ks = [], p;
            for (p in o) { if (o.hasOwnProperty(p)) { ks.push(p); } }
            return ks;
        };

        var numCombinations = Math.pow(operations.length, n);

        return keys(
            range(numCombinations)
                .map(buildWorkItem)
                .map(processWorkItem)
                .reduce(toSet, {})
        );
    }
};

console.log("!!!", exports.recursionAnswers.validParentheses(2));
