
// define the isPangram() function
let isPangram = (sentence) => {
  let sentence1 = sentence.toLowerCase();
  let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (let i = 0; i<alpha.length; i++) {
    if (sentence1.indexOf(alpha[i]) === -1) {
      return false;
    }
  }
  return true;
}

// test the isPangram() function, and print results to the console.
let testData = [
  { sentence: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { sentence: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { sentence: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { sentence: 'Not a pangram', pangram: false },
  { sentence: '', pangram: false },
]

testData.forEach((trial) => {
  let result = isPangram(trial.sentence)
  let correct = (result == trial.pangram)
  if (correct === true) {
    console.log(`isPangram gave a correct result for: ${trial.sentence}`)
  } else {
    console.log(`isPangram gave an incorrect result for: ${trial.sentence}`)
  }
})
