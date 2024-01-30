import {AsyncBooleanPipe} from './async-boolean.pipe';

describe('AsyncBooleanPipe', () => {
  it('should return true when input is true', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform(true)).toBe(true);
  });

  it('should return false when input is false', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform(false)).toBe(false);
  });

  it('should return false when input is null', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform(null)).toBe(false);
  });

  it('should return false when input is an empty string', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform('')).toBe(false);
  });

  it('should return false when input is a string with whitespace characters', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform('   ')).toBe(false);
  });


  it('should return false when input is a number other than 0 or 1', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform(2)).toBe(false);
  });
  it('should return true when input is a number a 1', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform(1)).toBe(true);
  });

  it('should return false when input is a number a 0', () => {
    const pipe = new AsyncBooleanPipe();
    expect(pipe.transform(0)).toBe(false);
  });

});
