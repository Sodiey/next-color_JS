export function generateParameter({ value, name, contrast }) {
  const withoutHashtag = value.substring(1, value.length);
  const theme = contrast === '#000000' ? 'light' : 'dark';
  return withoutHashtag + '-' + name + '-' + theme;
}
