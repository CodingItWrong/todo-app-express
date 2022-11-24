const hello = require('./hello');

describe('hello', () => {
  it('says hello', () => {
    expect(hello('Josh')).toEqual('Hello, Josh!');
  });
});