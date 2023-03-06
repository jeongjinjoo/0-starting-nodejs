const printChar = require('../print');

test('Console log was called at least 3 times', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    printChar();

    expect(logSpy).toHaveBeenCalledTimes(3);
});