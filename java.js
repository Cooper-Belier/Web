document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    
    const email = {
        to,
        subject,
        body
    };
    
    // Here, you would send the email object to your server to store it in your database
    console.log('Email sent:', email);
});
