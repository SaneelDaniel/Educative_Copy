## Fruits Into Basket (medium)

### Problem Statement

Given an array of characters where each character represents a fruit tree, you are given **two baskets**, and your goal is to put **maximum number of fruits in each basket**. The only restriction is that **each basket can have only one type of fruit**.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.

**Example 1:**

```java
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
```

**Example 2:**

```java
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
```

### Solution

This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in [Longest Substring with K Distinct Characters](../Longest_SubString_K_Distinct_Chars/README.md) with a given sum.

We can use a HashMap to remember the frequency of each character/Fruit we have processed.

Here is how we will solve this problem:

1. First, we will insert characters from the beginning of the array until we have 2 distinct characters in the HashMap.
   <br/>

2. These characters will constitute our sliding window. We are asked to find the longest such window having **no more than 2 distinct fruits**. We will remember the length of this window as the longest window so far.
   <br/>

3. After this, we will keep adding one character (fruit) in the sliding window (i.e., slide the window ahead) in a **stepwise manner**
   <br/>

4. In **each step**, we will try to **shrink** the window from the beginning if the count of distinct characters in the **HashMap** is larger than 2. We will shrink the window until we have no more than 2 distinct characters in the HashMap. This is needed as we intend to find the longest window.
   <br/>

5. While shrinking, we’ll decrement the character’s frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
   <br/>

6. At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
   <br/>

#### Code

```java
  public static int findLength(char[] arr) {
    int windowStart = 0, maxLength = 0;
    Map<Character, Integer> fruitFrequencyMap = new HashMap<>();
    // try to extend the range [windowStart, windowEnd]
    for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      fruitFrequencyMap.put(arr[windowEnd], fruitFrequencyMap.getOrDefault(arr[windowEnd], 0) + 1);
      // shrink the sliding window, until we are left with '2' fruits in the frequency map
      while (fruitFrequencyMap.size() > 2) {
        fruitFrequencyMap.put(arr[windowStart], fruitFrequencyMap.get(arr[windowStart]) - 1);
        if (fruitFrequencyMap.get(arr[windowStart]) == 0) {
          fruitFrequencyMap.remove(arr[windowStart]);
        }
        windowStart++; // shrink the window
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
  }
```

<br/>

#### Time Complexity: O(N)

<br/>

#### Space Complexity: O(1)

<br/>

<details>
<summary>Similar Problems</summary>

**Problem 1:** Longest Substring with at most 2 distinct characters

Given a string, find the length of the longest substring in it with at most two distinct characters.

**Solution:** This problem is exactly similar to our parent problem.

---

**Problem 2:** Max Fruits with at most K Distinct Baskets

Given an array of Frutis, and an int K find the maximum number of fruits you can put in each basket. The only restriction is that each basket can have only one type of fruit.

**Solution:** This problem is exactly similar to our parent problem. [link](./MaxFruitCountOfKTypes.java)

</details>

<br/>

[Code File](./MaxFruitCountOf2Types.java) | [Go Back](../README.md)
