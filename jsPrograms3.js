//Rotate an array to the right 1 position
const myArray = [1, 2, 3, 4, 5];
const lastIndex = myArray.length - 1;

if (myArray.length > 1) {
  const lastElement = myArray[lastIndex]; // Store the last element
  for (let i = lastIndex; i > 0; i--) {
    myArray[i] = myArray[i - 1]; // Shift elements to the right
  }
  myArray[0] = lastElement; // Place the stored last element at the beginning
}

console.log("Rotated Array:", myArray);


//Reverse an array

const myArray = [1, 2, 3, 4, 5];
const length = myArray.length;
const lastIndex = length - 1;

for (let i = 0; i < length / 2; i++) {
  const temp = myArray[i]; // Store the current element
  myArray[i] = myArray[lastIndex - i]; // Swap with the corresponding element from the end
  myArray[lastIndex - i] = temp; // Place the stored element at the corresponding end position
}

console.log("Reversed Array:", myArray);

//Reverse a string

const originalString = "Prasad";
let reversedString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}

console.log("Reversed String:", reversedString);

//Create a function that will merge two arrays and return the result as a new array

function mergeArrays(arr1, arr2) {
    const mergedArray = [];
    
    for (let i = 0; i < arr1.length; i++) {
      mergedArray.push(arr1[i]);
    }
    
    for (let i = 0; i < arr2.length; i++) {
      mergedArray.push(arr2[i]);
    }
    
    return mergedArray;
  }
  
  // Example usage:
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = mergeArrays(array1, array2);
  console.log("Merged Array:", mergedArray);
  

//Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either
// in the first array or second array but not in both

function findExclusiveNumbers(arr1, arr2) {
    const result = [];
    
    // Iterate through arr1 and check if each element is not in arr2
    for (let i = 0; i < arr1.length; i++) {//[1,2,3,4]
      let foundInArr2 = false;
      for (let j = 0; j < arr2.length; j++) {//[3,4,5,6,1]
        if (arr1[i] === arr2[j]) {
          foundInArr2 = true;
          break;
        }
      }
      if (!foundInArr2) {
        result.push(arr1[i]);
      }
    }
  
    // Iterate through arr2 and check if each element is not in arr1
    for (let i = 0; i < arr2.length; i++) {
      let foundInArr1 = false;
      for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) {
          foundInArr1 = true;
          break;
        }
      }
      if (!foundInArr1) {
        result.push(arr2[i]);
      }
    }
    
    return result;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6, 1];
  const exclusiveArray = findExclusiveNumbers(array1, array2);
  console.log("Exclusive Array:", exclusiveArray);
  
//Create a function that will receive two arrays and will return an array
// with elements that are in the first array but not in the second

function differenceArray(arr1, arr2) {
    const result = [];
  
  for(let i=0;i<array1.length;i++){
    first=false;
    for(j=0;j<arr2.length;j++){
      if(arr1[i]===arr2[j])
      {
        first=true;
        break;
      }
    }
    if(!first)
    {
      result.push(arr1[i]);
    }
  }
    return result;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  const difference = differenceArray(array1, array2);
  console.log("Difference Array:", difference);
  
  //Create a function that will receive an array of numbers as argument and 
  //will return a new array with distinct elements

  function getDistinctElements(arr) {
    const distinctArray = [];
  
    for (const num of arr) {
      if (!distinctArray.includes(num)) {
        distinctArray.push(num);
      }
    }
  
    return distinctArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const distinctElements = getDistinctElements(inputArray);
  console.log("Distinct Elements:", distinctElements);

  //Calculate the sum of first 100 prime numbers
  
  let count = 0; // Counter for the number of prime numbers found
  let sum = 0; // Variable to store the sum of prime numbers
  
  // Outer loop to find the first 100 prime numbers
  for (let j = 2; count < 100; j++) {
    let isPrime = true; // Flag to track if j is prime
  
    // Inner loop to check if j is divisible by any number from 2 to j - 1
    for (let i = 2; i < j; i++) {
      if (j % i === 0) {
        isPrime = false; // If j is divisible, it's not prime
        break;
      }
    }
  
    // If isPrime is still true, j is a prime number
    if (isPrime) {
      console.log(j); // Print the prime number
      sum += j; // Add the prime number to the sum
      count++; // Increment the count of prime numbers found
    }
  }
  
  console.log("Sum of the first 100 prime numbers:", sum); // Print the sum
  
  //Print the distance between the first 100 prime numbers
  let count = 0; // Counter for the number of prime numbers found
let lastPrime = null; // Variable to store the last prime number found

// Outer loop to find the first 100 prime numbers
for (let j = 2; count < 100; j++) {
  let isPrime = true; // Flag to track if j is prime

  // Inner loop to check if j is divisible by any number from 2 to j - 1
  for (let i = 2; i < j; i++) {
    if (j % i === 0) {
      isPrime = false; // If j is divisible, it's not prime
      break;
    }
  }

  // If isPrime is still true, j is a prime number
  if (isPrime) {
    if (lastPrime !== null) {
      const distance = j - lastPrime;
      console.log(`Distance between ${lastPrime} and ${j}: ${distance}`);
    }
    lastPrime = j; // Update the last prime number
    count++; // Increment the count of prime numbers found
  }
}
