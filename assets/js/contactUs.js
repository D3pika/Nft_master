const form = document.querySelector("form");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

function sendEmail() {
    const bodyMessage = `Full Name : ${fullname.value}\n Email : ${email.value}\n Phone Number : ${phone.value}\n Subject : ${subject.value}\n Message : ${message.value}`;

    Email.send({
        SecureToken: "5ba29f24-30d2-4e37-8b5d-e41062fa854b",
        To: 'web.testing004@gmail.com',
        From: "web.testing004@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(message => {
        if (message === "OK") {
            Swal.fire({
                title: "Query Sent!",
                text: "Your message has been forwarded.",
                icon: "success"
            });
        }
    });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    }

    checkEmail(); // Check email validity after checking all inputs
}

function checkEmail() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerHTML = "Email is not valid";
        } else {
            errorTxtEmail.innerHTML = "Email cannot be empty";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    sendEmail();
});

// Attach keyup event listener for email input field
email.addEventListener("keyup", () => {
    checkEmail();
});
