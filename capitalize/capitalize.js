const capitalize = (text) => {
  const arr = text.split('');
  arr[0] = arr[0].toUpperCase();
  const result = arr.join('');
  return result;
};

module.exports = capitalize;