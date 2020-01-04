// Meets Expectations
let researcherSpaceItems = [ new SpaceItem("rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00) ]

console.log('Dear Researcher,\n\nI bought you:\n\n')

function summary(array) {
  let totalCost = 0;
  for (let i = 0; i <array.length; i++) {
    if (array[i].quantity > 1) {
      console.log(`${array[i].quantity} ${array[i].name}s - $${(array[i].price * array[i].quantity).toFixed(2)}`)
    } else {
      console.log(`${array[i].quantity} ${array[i].name} - $${(array[i].price * array[i].quantity).toFixed(2)}`);
    }
    totalCost = totalCost += (array[i].price * array[i].quantity);
  }
  return (`\nYou owe me $${totalCost.toFixed(2)}.`);
  // array.forEach(item => console.log(`${item.quantity} ${item.name} - $${item.price * item.quantity}`))
  // console.log(`You owe me ${}`)
}




console.log(summary(researcherSpaceItems))











// Optional
// let inventoryLab1 = {
//   fruit: 2,
//   grain: 2,
//   plant: 5,
//   grassBlade: 5,
//   rock: 10,
//   mushroom: 11,
//   twig: 3,
//   insect: 1,
//   soilSample: 5
// };
//
// let inventoryLab2 = {
//   fruit: 2,
//   grain: 2,
//   plant: 5,
//   grassBlade: 5,
//   rock: 10,
//   mushroom: 11,
//   twig: 6,
//   insect: 10,
//   soilSample: 5
// };
