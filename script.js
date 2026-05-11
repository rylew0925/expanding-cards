// Select all elements with the class 'panel' and store them in a variable called 'panels'.
const panels = document.querySelectorAll('.panel');

// Loop through each panel and add a click event listener to it.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

// Define a function called 'removeActiveClasses' that removes the 'active' class from all panels.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}