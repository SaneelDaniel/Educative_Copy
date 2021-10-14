def triplet_with_smaller_sum(arr, target):
  arr.sort()
  triplets = []
  for i in range(len(arr)-2):
    search_pair(arr, target - arr[i], i, triplets)
  return triplets


def search_pair(arr, target_sum, first, triplets):
  left = first + 1
  right = len(arr) - 1
  while (left < right):
    if arr[left] + arr[right] < target_sum:  # found the triplet
      # since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      # left and right to get a sum less than the target sum
      for i in range(right, left, -1):
        triplets.append([arr[first], arr[left], arr[i]])
      left += 1
    else:
      right -= 1  # we need a pair with a smaller sum


def main():
  print(triplet_with_smaller_sum([-1, 0, 2, 3], 3))
  print(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5))


main()