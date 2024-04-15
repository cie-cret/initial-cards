const panels = document.querySelectorAll('.panel')

// console.log(panels);

// panels.map((panel) => {
//     return(panel);
// })

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        panel.classList.remove('zoomOut');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
        panel.classList.add('zoomOut');
    })
}