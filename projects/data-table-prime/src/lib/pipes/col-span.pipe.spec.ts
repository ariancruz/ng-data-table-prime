import {ColSpanPipe} from './col-span.pipe'
describe('ColSpanPipe', () => {
  it('should return the correct length when expand and sort are both true', () => {
    const pipe = new ColSpanPipe()
    const headers = [
      {field: 'field1', header: 'header1', visible: true, export: false},
      {field: 'field2', header: 'header2', visible: false, export: true},
      {field: 'field2', header: 'header2', visible: false, export: true},
    ];
    const expand = true;
    const sort = true;

    const result = pipe.transform(headers, expand, sort);

    expect(result).toBe(headers.length + 2);
  });

  it('should return the correct length when either expand or sort is true', () => {
    const pipe = new ColSpanPipe()
    const headers = [
      {field: 'field1', header: 'header1', visible: true, export: false},
      {field: 'field2', header: 'header2', visible: false, export: true},
      {field: 'field2', header: 'header2', visible: false, export: true},
    ];
    const expand = true;
    const sort = false;

    const result = pipe.transform(headers, expand, sort);

    expect(result).toBe(headers.length + 1);
  });

  it('should return the correct length when both expand and sort are false', () => {
    const pipe = new ColSpanPipe()
    const headers = [
      {field: 'field1', header: 'header1', visible: true, export: false},
      {field: 'field2', header: 'header2', visible: false, export: true},
      {field: 'field2', header: 'header2', visible: false, export: true},
    ];
    const expand = false;
    const sort = false;

    const result = pipe.transform(headers, expand, sort);

    expect(result).toBe(headers.length);
  });
});
