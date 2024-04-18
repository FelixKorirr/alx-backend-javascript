export default function cleanSet(set, startString) {
  const p = [];
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }
  for (const v of set.values()) {
    if (typeof v === 'string' && v.startsWith(startString)) {
      const valueSubStr = v.substring(startString.length);

      if (valueSubStr && valueSubStr !== v) {
        p.push(valueSubStr);
      }
    }
  }
  return p.join('-');
}
