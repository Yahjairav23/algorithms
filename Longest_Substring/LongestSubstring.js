/*
    LEETCODE #3: LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

    Given a string s, find the length of the longest substring without repeating characters.

        **Example 1:
        Input: s = "abcabcbb"
        Output: 3
        Explanation: The answer is "abc", with the length of 3.

        **Example 2:
        Input: s = "bbbbb"
        Output: 1
        Explanation: The answer is "b", with the length of 1.

        **Example 3:
        Input: s = "pwwkew"
        Output: 3
        Explanation: The answer is "wke", with the length of 3.
        Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

        **Example 4
        Input: s = ""
        Output: 0
        

        ++Constraints:
        0 <= s.length <= 5 * 104
        s consists of English letters, digits, symbols and spaces.
*/


var lengthOfLongestSubstring = function(s) {

    let longestSubstring = 0;
    let currentSubstring = "";
    
    let i = 0
    
    //loop through each char
    while(i<s.length){
        //set current char to a variable
        let currentChar = s.charAt(i)
        
        //check to see if the current char is in our subset already
        if(!currentSubstring.includes(currentChar)){
            //if it is not, we add this char to our subset
            currentSubstring += currentChar
        }else{
            //if it is we:
            //add the char to the end of the subset
            currentSubstring += currentChar
            //reset our subset to start at the char after the first appearance of our current char
            currentSubstring = currentSubstring.substring(currentSubstring.indexOf(currentChar)+1)
        }
        
        //set longest substring to the largest num between current longestSubstring or our currentSubstring.length
        longestSubstring = Math.max(currentSubstring.length, longestSubstring)
     
        //increment our loop variable
        i++
    }
    
    //return value that is left with longestSubstring
    return longestSubstring


};
