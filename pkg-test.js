const ora = require('ora');

const spinner = ora('Loading unicorns').start();
const logSymbols = require('log-symbols');

setTimeout(() => {
    // spinner.color = 'red';
    // spinner.text = 'Loading rainbows';
    // spinner.hideCursor = false;
    // spinner.succeed('Loading successful')
    // spinner.color = 'magenta';
        // spinner.text = 'Loading rainbows'; 
    spinner.stopAndPersist({symbol: logSymbols.warning, text: 'test is a test'});
}, 1000);