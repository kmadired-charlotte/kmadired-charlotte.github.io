emailjs.init('_FmUuL8p-Mwek9cUf');


function sendEmail(name,email,message) {
    
    
}


document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendEmail");

    sendButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };
    
        emailjs.send('service_hilockj', 'template_5giqomf', templateParams)
            .then(function (response) {
                console.log('Email sent successfully:', response);
                alert('Email sent successfully!');
            }, function (error) {
                console.error('Email send failed:', error);
                alert('Email send failed. Please try again later.');
            });

        // Replace this with your email sending logic
        // You can use a library like Email.js or handle the email sending on the server-side

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Show a confirmation message
        //alert(`Email sent to Kalyan. Please wait for a response. or If you want to talk to him, visit hire me page and schedule a meet using when? Button. Thank you, ${name}!`);
    });
});
