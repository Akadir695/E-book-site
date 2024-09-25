// Select the navbar element from the DOM
const navbar = document.querySelector('.navbar')

// Function to handle scroll events
const scrollEvent = () => {
  if (window.scrollY > 50) { // If the page has been scrolled down more than 50 pixels
    navbar.classList.add('bg-dark') // Add 'bg-dark' class to make the background dark
    navbar.classList.add('nav-sticky') // Add 'nav-sticky' class (with opacity and shadow)
  } else { // If the page is scrolled back up to the top (less than 50 pixels)
    navbar.classList.remove('bg-dark') // Remove the 'bg-dark' class
    navbar.classList.remove('nav-sticky') // Remove the 'nav-sticky' class
  }
}

// Function to add the scroll event listener to the window
const UserScroll = () => {
  window.addEventListener('scroll', scrollEvent) // Trigger the scrollEvent function when the user scrolls
}

// Call the function to activate the scroll listener
UserScroll()
