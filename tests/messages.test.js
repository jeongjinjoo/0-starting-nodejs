const messages = require('../messages');

test('Console log was called at least 3 times', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    messages();

    expect(logSpy).toHaveBeenCalledTimes(3);
});