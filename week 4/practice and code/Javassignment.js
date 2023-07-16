// Javascript Program To Check Whether Two Strings Are Anagram Of Each Other
// lrbt
function checkAnagram(str1, str2) {
  // Remove any non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Check if the lengths of the strings are the same
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in each string
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(checkAnagram('rail safety', 'fairy tales')); // true
console.log(checkAnagram('hello', 'world')); // false
