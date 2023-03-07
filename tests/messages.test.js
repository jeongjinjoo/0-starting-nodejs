const printMsgs = require('../messages');

test('Console log was called at least 3 times', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    printMsgs();

    expect(logSpy).toHaveBeenCalledTimes(3);
});