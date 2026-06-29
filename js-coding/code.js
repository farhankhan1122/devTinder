// 1- reverse a string 

// with build in 
// function reverseStr(str) {
//    return str.split("").reverse().join("")
// }

// console.log(reverseStr("madamm"))


// without buildin 
// function reverseString(str) {
//     let reversed = '';

//     for(let i = str.length -1 ; i >= 0 ; i--){
//         reversed += str[i]
//     }
//     return reversed;
// }
// console.log(reverseString("antier"))



// ---------------------------------------------------------------------------------------------------------------------------------


// 2- check given string is palindrome or not

function isPalindrome(str) {
    let left = 0 
    let right = str.length -1

    while (left < right ){
        if(str[left] !== str[right]) {
            return false
        }
        left++ ;
        right-- ;
    }
    return true;
}

console.log(isPalindrome("madam"))





// ----------------------------------------------------------------------------------------------------------------------------

// 3. Find Largest Number in Array

// using build in method
function largestNumber(arr) {
    return Math.max(arr)
}

console.log(largestNumber([1,2,6,4,9]))



// without build in method

// function largestNumber2 (arr){
//     let max = arr[0]

//     for(let i = 0 ; i <= arr.length -1 ; i++){
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(largestNumber2([1,2,6,4,9,10]))


// ---------------------------------------------------------------------------------------------------------------------------------


// 4. Remove Duplicate Elements



//----------------------------------------------------------------------------------------------------------------------------------

// 5- Given an array and target, return indices whose values add up to target.
// nums = [2,7,11,15]
// target = 9



// using brute force   [o(n2)]
    function twoSumBruteF(nums,target) {
        for(let i = 0 ; i<= nums.length -1; i++) {
            for(let j = i+1 ; j<= nums.length -1 ; j++){
                if(nums[i] + nums[j] == target){
                    return [i,j]
                }
            }
        }
    }

    console.log(twoSumBruteF([1,2,3,2,9],10), "brute force approach")

// using hashmap   [o(n)]
function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {

        const remaining = target - nums[i];

        if (map[remaining] !== undefined) {
            return [map[remaining], i];
        }

        map[nums[i]] = i;
    }
}

console.log(twoSum([2,7,11,15], 9));

