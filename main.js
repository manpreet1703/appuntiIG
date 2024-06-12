// Configurazione Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCvV-qN2dbuB6r7DSK-8rZ1Vk3cf_iHjqI",
    authDomain: "appuntiig.firebaseapp.com",
    projectId: "appuntiig",
    storageBucket: "appuntiig.appspot.com",
    messagingSenderId:"1:633225371316:web:801996e6cb159f80c8c1e1",
    appId: "G-CRKQJ0K44V"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);

// Gestione registrazione
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Registrazione avvenuta con successo');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert('Errore: ' + error.message);
            });
    });
}

// Gestione login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Login avvenuto con successo');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert('Errore: ' + error.message);
            });
    });
}
