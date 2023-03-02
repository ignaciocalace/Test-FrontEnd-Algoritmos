const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Parte 1
function onlyLetters(arr) {
  let newArr = [];
  arr.forEach((e) => {
    if (isNaN(e) && e != undefined) {
      newArr.push(e);
    }
  });
  return newArr;
}

function onlyNumbers(arr) {
  let newArr = [];
  arr.forEach((e) => {
    if (!isNaN(e) && e != "" && e != null) {
      newArr.push(e);
    }
  });
  return newArr;
}

function maxNumber(arr) {
  let newArr = onlyNumbers(arr);
  if (newArr.length > 0) {
    let maxNum = newArr[0];
    newArr.forEach((e) => {
      if (e > maxNum) maxNum = e;
    });
    return maxNum;
  }
  return null;
}

// Parte 2

function findVar(arr, toFind) {
  for (let i = 0; i < arr.length; i++) {
    if (toFind === arr[i]) return true;
  }
  return false;
}

// Parte 3

function generateId() {
  let id = "";
  function generator(i) {
    if (i % 5 != 0) {
      rand = Math.random();
      if (rand > 0.5) {
        return Math.random() * 9 + 48;
      } else {
        return Math.random() * 25 + 97;
      }
    } else return 45;
  }

  for (let i = 1; i < 20; i++) {
    id = id.concat(String.fromCharCode(generator(i)));
  }
  return id;
}

arr1 = ["a", 10, "b", "hola", 122, 15];
arr2 = [1, 11, "a", "b", 123];

readline.question(
  "Choose the function you want to test:\n" +
    "type 1 for: onlyLetters\n" +
    "type 2 for: onlyNumbers\n" +
    "type 3 for: maxNumber\n" +
    "type 4 for: findVar\n" +
    "type 5 for: generateId\n" +
    "Select option: ",
  (opt) => {
    switch (opt) {
      case "1": {
        const res = onlyLetters(arr1);
        console.log(`Finding only letters in ${arr1} \n 
        Result is: ${res}`);
        break;
      }
      case "2": {
        const res = onlyNumbers(arr1);
        console.log(`Finding only numbers in ${arr1} \n 
        Result is: ${res}`);
        break;
      }
      case "3": {
        const res = maxNumber(arr1, 10);
        console.log(`Finding max number in ${arr1} \n 
        Result is: ${res}`);
        break;
      }
      case "4": {
        const res = findVar(arr2);
        console.log(`Finding max number in ${arr2} \n 
        Result is: ${res}`);
        break;
      }
      case "5": {
        const id = generateId();
        console.log(`Your unique id is: ${id}`);
        break;
      }
    }
    readline.close();
  }
);
