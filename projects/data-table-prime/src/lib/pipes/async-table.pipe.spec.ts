import {AsyncTablePipe} from './async-table.pipe';

describe('AsyncTablePipe', () => {

  // Returns an empty array if the input value is null or undefined.
  it('should return an empty array when the input value is null', () => {
    const pipe = new AsyncTablePipe();
    const result = pipe.transform(null);
    expect(result).toEqual([]);
  });

  // Returns an empty array if the input value is null or undefined.
  it('should return an empty array when the input value is undefined', () => {
    const pipe = new AsyncTablePipe();
    const result = pipe.transform(undefined);
    expect(result).toEqual([]);
  });

  // Returns the input array if it is not null or undefined.
  it('should return the input array when it is not null or undefined', () => {
    const pipe = new AsyncTablePipe();
    const input = [1, 2, 3];
    const result = pipe.transform(input);
    expect(result).toBe(input);
  });

  // Returns an empty array if the input value is an empty array.
  it('should return an empty array when the input value is an empty array', () => {
    const pipe = new AsyncTablePipe();
    const result = pipe.transform([]);
    expect(result).toEqual([]);
  });

  // Returns a new array instance, not the input array.
  it('should return a new array instance, not the input array', () => {
    const pipe = new AsyncTablePipe();
    const input = [1, 2, 3];
    const result = pipe.transform(input);
    expect(result).not.toBe([...input, 4]);
  });

  // Returns a new array instance with the same values as the input array.
  it('should return a new array instance with the same values as the input array', () => {
    const pipe = new AsyncTablePipe();
    const input = [1, 2, 3];
    const result = pipe.transform(input);
    expect(result).toEqual(input);
  });

});
