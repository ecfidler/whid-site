let colors = ['orange', 'blue', 'pink', 'purple']
let col = Math.floor(Math.random() * 4)
links = document.querySelectorAll("#navbarSupportedContent .btn")
links.forEach(link => {
    link.classList.add(colors[col])
});
