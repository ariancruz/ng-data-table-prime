import {AsyncNumberPipe} from './async-number.pipe';

describe('AsyncNumberPipe', () => {

  // Returns the input number if it is not null or undefined
  it('should return the input number if it is not null or undefined', () => {
    const pipe = new AsyncNumberPipe();
    const input = 5;
    const result = pipe.transform(input);
    expect(result).toEqual(input);
  });

  // Returns 0 if the input number is null or undefined
  it('should return 0 if the input number is null or undefined', () => {
    const pipe = new AsyncNumberPipe();
    const input = null;
    const result = pipe.transform(input);
    expect(result).toEqual(0);
  });

  // Handles positive integer inputs correctly
  it('should handle positive integer inputs correctly', () => {
    const pipe = new AsyncNumberPipe();
    const input = 10;
    const result = pipe.transform(input);
    expect(result).toEqual(input);
  });

  // Returns Infinity if the input is Infinity
  it('should return Infinity if the input is Infinity', () => {
    const pipe = new AsyncNumberPipe();
    const result = pipe.transform(Infinity);
    expect(result).toEqual(Infinity);
  });

  // Returns -Infinity if the input is -Infinity
  it('should return -Infinity if the input is -Infinity', () => {
    const pipe = new AsyncNumberPipe();
    const input = -Infinity;
    const result = pipe.transform(input);
    expect(result).toEqual(-Infinity);
  });

});
