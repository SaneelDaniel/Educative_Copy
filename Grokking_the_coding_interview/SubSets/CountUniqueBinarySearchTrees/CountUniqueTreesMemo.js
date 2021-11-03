class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function count_trees(n) {
  return count_trees_rec({}, n);
}


function count_trees_rec(map, n) {
  if (n in map) {
    return map[n];
  }

  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    countOfLeftSubtrees = count_trees_rec(map, i - 1);
    countOfRightSubtrees = count_trees_rec(map, n - i);
    count += (countOfLeftSubtrees * countOfRightSubtrees);
  }

  map[n] = count;
  return count;
}


console.log(`Total trees: ${count_trees(2)}`);
console.log(`Total trees: ${count_trees(3)}`);