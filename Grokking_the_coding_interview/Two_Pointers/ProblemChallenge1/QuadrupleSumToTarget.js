function search_quadruplets(arr, target) {
  arr.sort((a, b) => a - b)
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}


function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while ((left < right)) {
    sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) { // found the quadruplet
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while ((left < right && arr[left] === arr[left - 1])) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      while ((left < right && arr[right] === arr[right + 1])) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (sum < targetSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}


console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));