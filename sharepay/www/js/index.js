// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc } from "../../node_modules/firebase/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9oyMrynbcxgiCC1OUoz9nHevvxuvIBJc",
    authDomain: "sharepay-abffa.firebaseapp.com",
    projectId: "sharepay-abffa",
    storageBucket: "sharepay-abffa.firebasestorage.app",
    messagingSenderId: "396784972724",
    appId: "1:396784972724:web:e66be805ac4174153138e1",
    measurementId: "G-R3N32Q2NEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersCollection = collection(db, "utenti");


const btnAccedere = document.getElementById("btn-accedere");
const emailInput = document.getElementById('iemail');
const passwordInput = document.getElementById('ipassword');
const btnRegistrare = document.getElementById("btn-registrare")

btnAccedere.addEventListener("click", () => {
    event.preventDefault();

    if (emailInput.value == '') {

        emailInput.style.border = '2px solid red';
        emailInput.style.outlineColor = 'red';
        emailInput.classList.add('warn-input');
        emailInput.classList.add('animation');

        console.log('Compila l`email per accedere!');

        setTimeout(() => {
            emailInput.classList.remove('animation');
        }, 500)
    } if (passwordInput.value == '') {
        passwordInput.style.border = '2px solid red';
        passwordInput.style.outlineColor = 'red';
        passwordInput.classList.add('warn-input');
        passwordInput.classList.add('animation');

        console.log('Compila la password per accedere!');
        setTimeout(() => {
            passwordInput.classList.remove('animation');
        }, 500)
    } else {
        const idUtente = emailInput.value


        setDoc(doc(db, "utenti", idUtente), {
            email: emailInput.value,
            password: passwordInput.value
        })
        .then(() => {
            console.log('Document written with ID:', idUtente);
        })
        .catch(error => {
            console.error('Error adding document:', error);
        });

        console.log('Login realizado com sucesso.')
    }
})

btnRegistrare.addEventListener("click", function () {
    window.location.href = 'registrare.html'
}) 