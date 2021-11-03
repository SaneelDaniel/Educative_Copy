function diff_ways_to_evaluate_expression(input) {
  return diff_ways_to_evaluate_expression_rec({}, input);
}


function diff_ways_to_evaluate_expression_rec(map, input) {
  if (input in map) {
    return map[input];
  }

  const result = [];
  // base case: if the input string is a number, parse and add it to output.
  if (!(input.includes('+')) && !(input.includes('-')) && !(input.includes('*'))) {
    result.push(parseInt(input));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (isNaN(parseInt(char, 10))) { // if not a digit
        // break the equation here into two parts and make recursively calls
        const leftParts = diff_ways_to_evaluate_expression_rec(map, input.substring(0, i));
        const rightParts = diff_ways_to_evaluate_expression_rec(map, input.substring(i + 1));
        for (let l = 0; l < leftParts.length; l++) {
          for (let r = 0; r < rightParts.length; r++) {
            let part1 = leftParts[l],
              part2 = rightParts[r];
            if (char === '+') {
              result.push(part1 + part2);
            } else if (char === '-') {
              result.push(part1 - part2);
            } else if (char === '*') {
              result.push(part1 * part2);
            }
          }
        }
      }
    }
  }
  map[input] = result;
  return result;
}


console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('1+2*3')}`);
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('2*3-4-5')}`);