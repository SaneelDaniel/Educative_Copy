function triplets_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

function search_pair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      count += right - left;
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}

console.log(triplets_with_smaller_sum([-2, 0, 1, 3], 2));
console.log(search_pair([1, 5, 3, 4, 7], 10));
