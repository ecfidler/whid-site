let colors = ['orange', 'blue', 'pink', 'purple']
let col = Math.floor(Math.random() * 4)
links = document.querySelectorAll("#navbarSupportedContent .btn")
links.forEach(link => {
    link.classList.add(colors[col])
});

var head = document.getElementsByTagName('HEAD')[0]; 
  
// Create new link Element
var link = document.createElement('link');

// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'header.css'; 

// Append link element to HTML head
head.appendChild(link); 