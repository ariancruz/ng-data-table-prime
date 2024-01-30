import { HeadersTable } from '../models/table';
import {ColHeaderPipe} from './col-header.pipe';

describe('ColHeaderPipe', () => {

  // The transform method should return an array of HeadersTable objects when given an array of any type of objects.
  it('should return an array of HeadersTable objects when given an array of any type of objects', () => {
    const pipe = new ColHeaderPipe();
    const input = [{field: 'field1', header: 'header1', visible: true, export: false}];
    const expected = [{field: 'field1', header: 'header1', visible: true, export: false}];
    const result = pipe.transform(input);
    expect(result).toEqual(expected);
  });

  // The transform method should return an empty array when given an empty array.
  it('should return an empty array when given an empty array', () => {
    const pipe = new ColHeaderPipe();
    const input: any[] = [];
    const expected: jasmine.Expected<jasmine.ArrayLike<HeadersTable>> = [];
    const result = pipe.transform(input);
    expect(result).toEqual(expected);
  });

  // The transform method should return an array of HeadersTable objects with the same length as the input array.
  it('should return an array of HeadersTable objects with the same length as the input array', () => {
    const pipe = new ColHeaderPipe();
    const input = [
      {field: 'field1', header: 'header1', visible: true, export: false},
      {field: 'field2', header: 'header2', visible: false, export: true}
    ];
    const expected = [
      {field: 'field1', header: 'header1', visible: true, export: false},
      {field: 'field2', header: 'header2', visible: false, export: true}
    ];
    const result = pipe.transform(input);
    expect(result.length).toEqual(expected.length);
  });

  // The transform method should handle null and undefined values as empty arrays.
  it('should handle null and undefined values as empty arrays', () => {
    const pipe = new ColHeaderPipe();
    const input1 = null;
    const input2 = undefined;
    const expected: jasmine.Expected<jasmine.ArrayLike<HeadersTable>> = [];
    const result1 = pipe.transform(input1);
    const result2 = pipe.transform(input2);
    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  // The transform method should handle arrays with non-object elements.
  it('should handle arrays with non-object elements', () => {
    const pipe = new ColHeaderPipe();
    const input = [1, 'string', true];
    const expected: jasmine.Expected<jasmine.ArrayLike<HeadersTable>> = [];
    const result = pipe.transform(input);
    expect(result).toEqual(expected);
  });

});
