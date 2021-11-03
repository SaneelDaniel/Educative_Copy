function generate_valid_parentheses(num) {
  result = [];
  const parenthesesString = Array(2 * num);
  generate_valid_parentheses_rec(num, 0, 0, parenthesesString, 0, result);
  return result;
}


function generate_valid_parentheses_rec(num, openCount, closeCount, parenthesesString, index, result) {
  // if we've reached the maximum number of open and close parentheses, add to the result
  if (openCount === num && closeCount === num) {
    result.push(parenthesesString.join(''));
  } else {
    if (openCount < num) { // if we can add an open parentheses, add it
      parenthesesString[index] = '(';
      generate_valid_parentheses_rec(num, openCount + 1, closeCount, parenthesesString, index + 1, result);
    }
    if (openCount > closeCount) { // if we can add a close parentheses, add it
      parenthesesString[index] = ')';
      generate_valid_parentheses_rec(num, openCount, closeCount + 1, parenthesesString, index + 1, result);
    }
  }
}

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`);
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`);