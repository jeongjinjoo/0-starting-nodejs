const numbers = require('../numbers');

test('Console log was called 10 times', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    numbers();

    expect(logSpy).toHaveBeenCalledTimes(10);
});