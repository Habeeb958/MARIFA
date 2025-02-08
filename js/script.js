document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle the "show-menu" class when the burger menu is clicked
  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
  });

  // Close the mobile menu if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove('show-menu'); // Hide the menu
    }
  });
});
