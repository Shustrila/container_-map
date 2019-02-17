import Errors from '../src/js/errors.js';

describe('TEST: Errors Class', () => {
  test('check for errors add method', () => {
    const errors = new Errors();
    expect(() => errors.add(2)).toThrow();
  });

  test('add two errors', () => {
    const errors = new Errors();

    errors.add('1', 'this error test');
    errors.add('2', 'this error test');

    expect(errors.getError('1')).toBe('this error test');
  });

  test('add key with undefined value', () => {
    const errors = new Errors();

    errors.add('1');

    expect(errors.getError('1')).toBe('Unknown error');
  });
});
