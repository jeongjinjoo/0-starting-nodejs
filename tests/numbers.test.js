const printNumbers = require('../numbers');

test('Console log was called 10 times', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    printNumbers();

    expect(logSpy).toHaveBeenCalledTimes(10);
});