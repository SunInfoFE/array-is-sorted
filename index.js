let defaultComparator = (prev, next) => {
  return next - prev;
}

module.exports = (array, comparator) => {
  comparator = comparator || defaultComparator;
  for (let i = 0, len = array.length - 1; i < len; i++) {
    if (comparator(array[i], array[i + 1]) < 0) return false;
  }
  return true;
}