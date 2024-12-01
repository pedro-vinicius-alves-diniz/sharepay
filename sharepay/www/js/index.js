const db = null

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
        console.log('Login realizado com sucesso.')

        window.location.href = 'home.html'
    }
})

btnRegistrare.addEventListener("click", function () {
    window.location.href = 'registrare.html'
}) 