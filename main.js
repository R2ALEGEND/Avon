const menuIcon = document.getElementById('menu-icon'); // Menu Icon
const sidebar = document.getElementById('sidebar'); // Sidebar
const closeBtn = document.getElementById('close-btn'); // Close Button

// Open Sidebar on Menu Icon Click
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
    document.body.classList.add('no-scroll'); // Disable scrolling
});

// Close Sidebar on Close Button Click
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    document.body.classList.remove('no-scroll'); // Enable scrolling
});
// Scroll-Up Button Functionality
const scrollUpButton = document.getElementById('scroll-up');

// Show the scroll-up button when scrolling down
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    scrollUpButton.classList.add('show');
  } else {
    scrollUpButton.classList.remove('show');
  }
};

// Scroll to the top of the page
scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
