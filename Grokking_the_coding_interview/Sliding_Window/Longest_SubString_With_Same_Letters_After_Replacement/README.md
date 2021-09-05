## Longest Substring with Same Letters after Replacement (hard)

### Problem Statement

Given a string with lowercase letters only, if you are allowed to **replace no more than ‘k’ letters** with any letter, find the **length of the longest substring having the same letters** after replacement.

**Example 1:**

```java
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
```

**Example 2:**

```java
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
```

**Example 3:**

```java
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
```

### Solution

This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in [No-repeat Substring](../LongestSubString_Distinct_Characters/README.md). We can use a HashMap to count the frequency of each letter.

Here is how we will solve this problem:

1. We will iterate through the string to add one letter at a time in the window.
   <br/>

2. We will also keep track of the count of the maximum repeating letter in any window (let’s call it **maxRepeatLetterCount**).
   <br/>

3. So, at any time, we know that we do have a window with one letter repeating **maxRepeatLetterCount** times; this means we should try to replace the remaining letters.
   <br/>

   - If the remaining letters are less than or equal to ‘k’, we can replace them all.
     <br/>
   - If we have more than ‘k’ remaining letters, we should shrink the window as we cannot replace more than ‘k’ letters.
     <br/>

While shrinking the window, we don’t need to update maxRepeatLetterCount (hence, it represents the maximum repeating count of ANY letter for ANY window)

<br/>

Since we have to replace all the remaining letters to get the longest substring having the same letter in any window, we can’t get a better answer from any other window even though all occurrences of the letter with frequency maxRepeatLetterCount is not in the current window.

#### Code

```java
public static int findLength(String str, int k) {
    int windowStart = 0, maxLength = 0, maxRepeatLetterCount = 0;
    Map<Character, Integer> letterFrequencyMap = new HashMap<>();
    // try to extend the range [windowStart, windowEnd]
    for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
      char rightChar = str.charAt(windowEnd);
      letterFrequencyMap.put(rightChar, letterFrequencyMap.getOrDefault(rightChar, 0) + 1);
      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, letterFrequencyMap.get(rightChar));

      // current window size is from windowStart to windowEnd, overall we have a letter which is
      // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
      // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
      // if the remaining letters are more than 'k', it is the time to shrink the window as we
      // are not allowed to replace more than 'k' letters
      if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
        char leftChar = str.charAt(windowStart);
        letterFrequencyMap.put(leftChar, letterFrequencyMap.get(leftChar) - 1);
        windowStart++;
      }

      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
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

<br/>

[Code File](./CharacterReplacement.java) | [Go Back](../README.md)
