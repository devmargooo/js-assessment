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

    },

    validParentheses: function(n) {

    }
};
