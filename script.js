document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us, " + name + ". We'll get back to you soon!");
    } else {
        alert("Please fill out all fields.");
    }

    // Optionally, you can add code to send the form data to a server.
});
