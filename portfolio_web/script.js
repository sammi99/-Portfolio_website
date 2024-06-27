document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   // display a toast of success text.
    
    const formStatus = document.getElementById('form-status');
    formStatus.textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';

    // Clear the form
    document.getElementById('contact-form').reset();
});