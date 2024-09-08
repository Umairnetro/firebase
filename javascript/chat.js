// Initialize Firebase
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<AUTH_DOMAIN>",
    databaseURL: "<DATABASE_URL>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_SENDER_ID>"
  };
  firebase.initializeApp(config);
  
  // Get elements
  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  
  // Add signup event
  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, pass)
      .then(auth => {
        console.log(auth);
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  
  // Add login event
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass)
      .then(auth => {
        console.log(auth);
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  
  // Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });
  
  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
    }
  });
  