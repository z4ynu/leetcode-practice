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

