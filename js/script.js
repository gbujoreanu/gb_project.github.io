// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submit button
form.addEventListener('submit', (e) => {
  // Get the form input elements
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  
  // Check if the name input field is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    e.preventDefault(); // Prevent the form from submitting
    return;
  }
  
  // Check if the email input field is empty
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    e.preventDefault(); // Prevent the form from submitting
    return;
  }
  
  // Check if the email is valid using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    e.preventDefault(); // Prevent the form from submitting
    return;
  }
  
  // Check if the message input field is empty
  if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    e.preventDefault(); // Prevent the form from submitting
    return;
  }
  
  // If all the form fields are valid, submit the form
  alert('Thank you for your message!');
});
