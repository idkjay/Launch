// Your code here!
let quotes = [
  'Live as if you were to die tomorrow. Learn as if you were to live for forever. - Mahatma Gandhi',
  'That which does not kill us makes us stronger. - Friedrich Nietzche',
  'After a while, you learn to ignore the names people call you and just trust who you are. - Shrek'
];

function newQuote() {
  let ranNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteGen').innerHTML = quotes[ranNum];
}

let finishedProjects = [
  "Project Ekko",
  "Project Akali",
  "Project Yasuo"
];

let html = '';

finishedProjects.forEach(function (project) {
	html += '<li>' + project + '</li>';
});

html = '<ul>' + html + '</ul>';

function projects() {
  document.getElementById('projectsList').innerHTML = html;
}
