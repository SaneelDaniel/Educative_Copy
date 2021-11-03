function find_letter_case_string_permutations(str) {
  permutations = [];
  permutations.push(str);
  // process every character of the string one by one
  for (i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) { // only process characters, skip digits
      // we will take all existing permutations and change the letter case appropriately
      const n = permutations.length;
      for (j = 0; j < n; j++) {
        const chs = permutations[j].split(''); // string to array
        // if the current character is in upper case, change it to lower case or vice versa
        if (chs[i] === chs[i].toLowerCase()) {
          chs[i] = chs[i].toUpperCase();
        } else {
          chs[i] = chs[i].toLowerCase();
        }
        permutations.push(chs.join(''));
      }
    }
  }

  return permutations;
}


console.log(`String permutations are: ${find_letter_case_string_permutations('ad52')}`);
console.log(`String permutations are: ${find_letter_case_string_permutations('ab7c')}`);