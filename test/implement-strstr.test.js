const func = require('../src/implement-strstr');

describe('first', () => {
  it('test a', () => {
    expect(func('hello', 'll')).toBe(2);
  });


  // it('test b', () => {
  //   expect(func('hello', '')).toBe(0);
  // });

  // it('test c', () => {
  //   expect(func('helloei iowef wef0', 'he')).toBe(0);
  // });
})