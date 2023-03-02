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
