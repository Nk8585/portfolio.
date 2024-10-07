// Form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (name === "" || email === "" || message === "") {
    alert('Please fill in all fields');
  } else {
    alert(`Thank you ${name}, your message has been sent!`);
    form.reset(); // Clear form after submission
  }
});
