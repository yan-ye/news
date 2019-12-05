require('../library/config');
const argv = require('minimist')(process.argv.slice(2));
if (argv.hasOwnProperty('start')) {
    switch (argv.start) {
        case 'spider':
            require('./spider');
            break;
    }
}
