import {
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

const joinBtn = document.querySelector(".join");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#registerBtn");
const message = document.querySelector("#message");

if (registerBtn) {
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        message.innerHTML = "Successfully registered";
        message.style.display = "block";
        window.location.href = "./login.html";
      })
      .catch((error) => {
        email.value = "";
        password.value = "";
        message.style.display = "block";
        message.innerHTML = "Please try another email";
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
