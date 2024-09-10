import {
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#registerBtn");
const message = document.querySelector("#message");

const showMessage = (message, htmlElement) => {
  let msg = document.querySelector(htmlElement);
  msg.innerHTML = message;
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
};

if (registerBtn) {
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        showMessage("Successfully registered", "#message");
        window.location.href = "./login.html";
      })
      .catch((error) => {
        email.value = "";
        password.value = "";
        if (error.code === "auth/email-already-in-use") {
          showMessage("Email already in use", "#message");
        } else {
          showMessage("Unable to register", "#message");
        }
      });
  });
}

const loginBtn = document.querySelector("#loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.log(error);
        message.style.display = "block";
        message.innerHTML = "email or password is incorrect";
      });
  });
}
