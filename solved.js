// Two Sum

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([1, 2, 4, 5], 9));

// Palindrome

function isPalindrome(num) {
    let array = Array.from(String(num), Number);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(121));

// Roman to Int

var romanToInt = function(s) {
    
  let total = 0;

  function getValue(char) {
    if (char === 'I') return 1;
    if (char === 'V') return 5;
    if (char === 'X') return 10;
    if (char === 'L') return 50;
    if (char === 'C') return 100;
    if (char === 'D') return 500;
    if (char === 'M') return 1000;
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    let currentNumber = getValue(s[i]);
    let nextValue = getValue(s[i + 1]);

    if (currentNumber < nextValue) {
        total -= currentNumber;
    } else {
        total += currentNumber;
    }
  }
  return total;
};

// Fizz Buzz

var fizzBuzz = function(n) {
    let array = [];
    for (let i = 1; i <= n; i++) { 
        if (i % 15 === 0) {        
            array.push('FizzBuzz');
        } else if (i % 3 === 0) {  
            array.push("Fizz");
        } else if (i % 5 === 0) {   
            array.push("Buzz");
        } else {
            array.push(`${i}`); 
        }
    }
    return array;  
};
