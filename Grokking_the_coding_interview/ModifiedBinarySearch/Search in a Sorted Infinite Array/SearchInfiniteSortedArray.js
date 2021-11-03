class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    return this.arr[index];
  }
}


function search_in_infinite_array(reader, key) {
  // find the proper bounds first
  let start = 0;
  let end = 1;
  while (reader.get(end) < key) {
    newStart = end + 1;
    end += (end - start + 1) * 2;
    // increase to double the bounds size
    start = newStart;
  }

  return binary_search(reader, key, start, end);
}

function binary_search(reader, key, start, end) {
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < reader.get(mid)) {
      end = mid - 1;
    } else if (key > reader.get(mid)) {
      start = mid + 1;
    } else { // found the key
      return mid;
    }
  }

  return -1;
}


let reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
console.log(search_in_infinite_array(reader, 16));
console.log(search_in_infinite_array(reader, 11));
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(search_in_infinite_array(reader, 15));
console.log(search_in_infinite_array(reader, 200));