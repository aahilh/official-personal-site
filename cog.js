const submit = document.getElementsByClassName("submit")[0];

const confirm = () => {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errorField = document.getElementById("error-label");

    const firstNameExists = firstName.value != "";
    const lastNameExists = lastName.value != "";
    const emailExists = email.value.includes("@");
    const messageExists = message.value != "";

    if(!firstNameExists || !lastNameExists || !emailExists || !messageExists) {
    errorField.style.color = "hsl(0, 93.50%, 36.30%)";
    errorField.textContent = "Error: One or more fields is either missing \nor is not appropriate. Please check again.";
    setTimeout(() => {
            errorField.textContent = "";
        }, 5000);
    }
    else{
     emailjs.send("service_mpnk5fs","template_tbmxtzf", {
            from_name: `${firstName.value} ${lastName.value}`,
            from_email: email.value,
            message: message.value
        }).then(() => {
            errorField.style.color = "hsl(118, 95.80%, 46.30%)";
            errorField.textContent = "Message has been sent successfully.";
            setTimeout(() => {
            errorField.textContent = "";
        }, 5000);
        }).catch((error) => {
            errorField.style.color = "hsl(0, 93.50%, 36.30%)";
            errorField.textContent = "There was an error sending your message. Please try again later.";
            console.error("EmailJS error:", error);
        });
    }
};

submit.addEventListener("click", confirm);