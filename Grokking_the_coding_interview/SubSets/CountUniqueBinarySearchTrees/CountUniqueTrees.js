function count_trees(n) {
  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    const countOfLeftSubtrees = count_trees(i - 1);
    const countOfRightSubtrees = count_trees(n - i);
    count += (countOfLeftSubtrees * countOfRightSubtrees);
  }
  return count;
}

console.log(`Total trees: ${count_trees(2)}`);
console.log(`Total trees: ${count_trees(3)}`);