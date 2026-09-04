function register() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Check empty fields
    if (email === "" || password === "") {
        message.innerText = "Please enter email and password.";
        message.style.color = "red";
        return;
    }

    // Check password length
    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    message.innerText = "Creating account...";
    message.style.color = "blue";

    firebase.auth()
        .createUserWithEmailAndPassword(email, password)

        .then((userCredential) => {

            console.log("Account created:", userCredential.user);

            message.innerText = "Account created successfully! 🎉";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        })

        .catch((error) => {

            console.error("Firebase Error:", error);

            message.style.color = "red";

            if (error.code === "auth/email-already-in-use") {
                message.innerText = "This email is already registered.";
            }
            else if (error.code === "auth/invalid-email") {
                message.innerText = "Invalid email address.";
            }
            else if (error.code === "auth/weak-password") {
                message.innerText = "Password must contain at least 6 characters.";
            }
            else if (error.code === "auth/network-request-failed") {
                message.innerText = "Network error. Check your internet.";
            }
            else {
                message.innerText = error.message;
            }
        });
}