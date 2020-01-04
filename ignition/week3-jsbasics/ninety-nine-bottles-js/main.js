var count = 99;
while (count > 0) {
  if (count % 10 === 0) {
    console.log(`\n${count} bottles of beer on the wall, ${count} bottles of beer! Take one down and pass it around, ${count-1} bottles of beer on the wall.`);
    count --;
  } else if (count === 2) {
    console.log(`\n${count} bottles of beer on the wall, ${count} bottles of beer. Take one down and pass it around, ${count-1} bottle of beer on the wall.`);
    count --;
  } else if (count === 1){
    console.log(`\n${count} bottle of beer on the wall, ${count} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`);
    count --;
  } else {
    console.log(`\n${count} bottles of beer on the wall, ${count} bottles of beer. Take one down and pass it around, ${count-1} bottle of beer on the wall.`);
    count --;
  }
}
console.log("\nNo more bottles of beer on the wall")
