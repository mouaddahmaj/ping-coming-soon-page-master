function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const err=document.getElementById('msgErr')
    if (validateEmail(email)) {
        err.classList.add("default");
        err.classList.remove("msgErr");
        emailInput.classList.add("InputNErr");
        emailInput.classList.remove("InputErr");
    } else {
        err.classList.remove("default");
        err.classList.add("msgErr");
        err.textContent = "Please provide a valid email address";
        emailInput.classList.remove("InputNErr");
        emailInput.classList.add("InputErr");

    }
});