require('../library/config');
const argv = require('minimist')(process.argv.slice(2));
if (argv.hasOwnProperty('start')) {
    const modles = require('../library/models');
    switch (argv.start) {
        case 'spider':
            require('./spider');
            break;
    }
}
