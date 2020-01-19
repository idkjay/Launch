let removeWithoutCopy = (arr, item) => {
  for(let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === item) {
      arr.splice(i,1)
    }
  }
  return arr
};

let append = (arr, item) => {
  arr.push(item)
  return arr
};

let truncate = (arr) => {
  arr.pop()
  return arr
};

let prepend = (arr, item) => {
  arr.unshift(item)
  return arr
};

let curtail = (arr) => {
  arr.shift()
  return arr
};

let concat = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2)
  return arr3
};

let insert = (arr, item, index) => {
  arr.splice(index, 0, item)
  return arr
}

let count = (arr, item) => {
  return arr.filter(element ==> element === item).length
};

let duplicates = (arr) => {
  let dupliArr = arr.filter((v, i) => arr.indexOf(v) != i);
  return dupliArr.filter((v,i) => dupliArr.indexOf(v) === i);
};

let square = (arr) => {
  return arr.map(element => element * element)
};

let findAllOccurrences = (arr, item) => {
  let occurences = []
  arr.forEach((element, index) => {
    if(element === item) {
      occurences.push(index)
    }
  })
  return occurences
};
