// Write a function that takes in a string and outputs the number of vowels (not counting y).
//
// Ex:
// Input: "hello"
// Output: 2
//
// Input: "you are great!"
// Output: 6
//
// Input: "why?"
// Output: 0
var countVowels = function(str) {
	var count = 0;
	var input = str.toLowerCase();
	var vowelArr = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < input.length; i++){
	  if(vowelArr.includes(input[i])){
		  count++;
    }
	}
	return count;
};



// Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).
//
// Ex:
// Input: "noon"
// Output: true
//
// Input: "horse"
// Output: false
//
// Input: "racecar"
// Output: true

var isPalindrome = function (str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - (i + 1)]) {
			return false;
		}
	}
	return true;
};

var isPalindrome = function (str) {
    return str.split("").reverse().join("") === str;
};
