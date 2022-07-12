const formId = document.querySelector("#formulario");

formId.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;
    console.log(nome);
    console.log(email);
    console.log(msg);
});