// Your code goes here!
let todo = [
  "Eat",
  "Sleep",
  "Play"
];

let unorderedList = document.getElementById('todo-list');

todo.forEach(function(todo) {
  unorderedList.innerHTML += `<li> ${todo} </li>`;
});
