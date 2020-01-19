reduceString = (str, amount) => {
  let result = []
  const isNotRepeated = (letter) => {
    let last = result.length - 1
    for (let i = 0; i < amount; i++) {
      if (result[last - 1] !== letter) {
        return true
      }
    }
    return false
  }
  str.split('').forEach(letter => {
    if(isNotRepeated(letter)) {
      result.push(letter)
    }
  })
  return result.join('')
};

reverseString = (str) => {
  let reverse = []
  let strArr = str.split('')
  for(let i = strArr.length - 1; i >= 0; i--){
    reverse.push(strArr[i])
  }
  return reverse.join('')
};
