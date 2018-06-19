// NOTE: Config files are highly dependant
// on project structure
// stage 1module.exports = {}

// module.exports = {
//     output: {
//         filename: 'bundle.js',
//     },
// };

// const path = require('path');

// module.exports = {
//     entry: path.resolve('./src/index.js'),
//     output: {
//         filename: 'bundle.js',
//     },
// };

const path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
    },
};