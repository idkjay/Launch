let data = require('./data')

// 1)
const numOfRepos = (array) => {
  return data.length;
}
console.log('\n1) ' + numOfRepos(data))

// 2)
const largestRepo = (array) => {
  let maxIndex = 0;
  for (let i = 0; i < array.length; i ++) {
    if (array[i].size > array[maxIndex].size) {
      maxIndex = i;
    }
  }
  return array[maxIndex].name;
}
console.log('\n2) ' + largestRepo(data))

// 3) use substrings
const mostRecentRepo = (array) => {
  let mostRecent = 0;
  for (let i = 0; i < array.length; i ++) {
    if (array[i].created_at > array[mostRecent].created_at) {
      mostRecent = i;
    }
  }
  return array[mostRecent].name;
}
console.log('\n3) ' + mostRecentRepo(data))

// 4)
const noGazers = (array) => {
  let zeroGazers = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].stargazers_count === 0) {
      zeroGazers++;
    }
  }
  return zeroGazers;
}
console.log('\n4) ' + noGazers(data))

// 5)
const maxGazers = (array) => {
  let largestGazers = 0;
  for(let i = 0; i<array.length; i++) {
    if (array[i].stargazers_count > array[largestGazers].stargazers_count) {
      largestGazers = i;
    }
  }
  return array[largestGazers].name;
}
console.log('\n5) ' + maxGazers(data))

// 6)
const hasDescriptions = (array) => {
  let arr = [];
  for(let i = 0; i<array.length; i++) {
    if (array[i].description !== null) {
      arr.push(array[i].name);
    }
  }
  return `${arr.join(', ')}`;
}
console.log('\n6) ' + hasDescriptions(data))

//7)
const newDescriptionsArray = (array) => {
  let arr = array.map(x => {
    if (x.description === null) {
      return "No description provided"
    } else {
      return x.description;
    }
  })
  return `${arr.join(', ')}`;
}
console.log('\n7) List of all descriptions: ' +  newDescriptionsArray(data))

//8)
let keyInfo = (array) => {
    let arr = array.map(function(arrayItem) {
        if(typeof arrayItem.owner === 'object') {
            return arrayItem.name + ' by ' + arrayItem.owner.login + ' has ' + arrayItem.watchers_count + ' watchers'
        } else {
            return arrayItem.name + ' by ' + arrayItem.owner + ' has ' + arrayItem.watchers_count + ' watchers'
        }
    })
    return `${arr.join(', ')}`;
}
console.log('\n8) Repo summaries: ' +  keyInfo(data))

//9)
let monkeyKeys = (array) => {
  for(let i=0;i<array.length;i++) {
    if (array[i].name = "monkey_party"){
      return Object.keys(array[i].license)[0] + `, ` + Object.keys(array[i].license)[1];
    }
  }
}
console.log('\n9) ' + monkeyKeys(data))

//10)
let urlValue = (array) => {
  for(let i=0;i<array.length;i++) {
    if (array[i].name = "monkey_party") {
      return array[i].license.url;
    }
  };
}
console.log('\n10) ' + urlValue(data))

module.exports = { numOfRepos, largestRepo, mostRecentRepo, noGazers, maxGazers, hasDescriptions, newDescriptionsArray, keyInfo, monkeyKeys, urlValue }
