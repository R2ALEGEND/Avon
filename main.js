
function toggleMenu() {
const navbar = document.getElementById("navbar");
navbar.classList.toggle("active");
}

function closeMenu() {
const navbar = document.getElementById("navbar");
navbar.classList.remove("active");
}


function toggleCommandList(element) {
const commandList = element.querySelector('.command-list');
const isDisplayed = commandList.style.display === 'block';

// Close all command lists first
document.querySelectorAll('.command-list').forEach(list => {
list.style.display = 'none';
});

// Toggle the clicked command list
commandList.style.display = isDisplayed ? 'none' : 'block';
}