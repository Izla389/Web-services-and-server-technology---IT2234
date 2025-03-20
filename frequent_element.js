/*
[4,8,3,4,3,2,1,8,4]
find the most frequent element in the array
*/

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequencyMap = {};
let mostFrequentElement;
let maxCount = 0;


for (let i = 0; i < arr.length; i++) {
  frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
}


for (let num in frequencyMap) {
  if (frequencyMap[num] > maxCount) {
    maxCount = frequencyMap[num];
    mostFrequentElement = num;
  }
}

console.log(mostFrequentElement);  // Output: 4
