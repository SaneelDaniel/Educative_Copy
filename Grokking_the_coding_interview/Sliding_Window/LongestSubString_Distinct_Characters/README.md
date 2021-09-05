## Longest Substring with Distinct Characters (medium)

### Problem Statement

Given a string, find the length of the **longest substring** in it with **no repeatingcharacters**.

**Example 1:**

```java
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
```

**Example 2:**

```java
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
```

**Example 3:**

```java
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
```

### Solution

This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in [Longest Substring with K Distinct Characters](../Longest_SubString_K_Distinct_Chars/README.md).

We can use a HashMap to remember the last index of each character we have processed.

Whenever we get a repeating character, we will shrink our sliding window to ensure that we always have distinct characters in the sliding window.

Here is how we will solve this problem:

1. First, we will loop through the start of the array till the end.
   <br/>

2. If the map already contains the 'Current Char', shrink the window from the beginning such that we have only one occurrence of 'Current Character'.
   <br/>

3. After this, we will keep adding one character in the sliding window (i.e., slide the window ahead) in a **stepwise manner**
   <br/>

4. In **each step**, we will try to **shrink** the window from the beginning if the character exists in the **HashMap**. We will shrink the window until we have no more repeating characters in the HashMap.
   <br/>

5. At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
   <br/>

#### Code

```java
public static int findLength(String str) {
    int windowStart = 0, maxLength = 0;
    Map<Character, Integer> charIndexMap = new HashMap<>();
    // try to extend the range [windowStart, windowEnd]
    for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
      char rightChar = str.charAt(windowEnd);
      // if the map already contains the 'rightChar', shrink the window from the beginning so that
      // we have only one occurrence of 'rightChar'
      if (charIndexMap.containsKey(rightChar)) {
        // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
        // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
      }
      charIndexMap.put(rightChar, windowEnd); // insert the 'rightChar' into the map
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1); // remember the maximum length so far
    }

    return maxLength;
  }
```

<br/>

#### Time Complexity:

O(N) where ‘N’ is the number of characters in the input string.
<br/>

#### Space Complexity:

O(K) where K is the number of distinct characters in the input string. This also means K<=N, because in the worst case, the whole string might not have any repeating character, so the entire string will be added to the HashMap

<be/>

[Code File](./NoRepeatSubstring.java) | [Go Back](../README.md)
