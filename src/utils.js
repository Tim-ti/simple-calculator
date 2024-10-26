export function trimLeadingZeroes(str) {
  const trimmed = str.replace(/^0+/, '');
  return trimmed === '' ? '0' : trimmed;
}
