export function generateParameter({ value, name, contrast }) {
  const theme = contrast === '#000000' ? 'light' : 'dark';
  return withoutHashtag(value) + '-' + name + '-' + theme;
}

export const withoutHashtag = (str) => str.substring(1, str.length);

export function ColorModel({ name, value, contrast }) {
  this.hex = { value };
  this.name = { value: name };
  this.contrast = { value: contrast };
}
