const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();


    if(name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Por favor, preencha todos os campos!";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Por favor, insira um e-mail válido!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Mensagem enviada com sucesso!";

    contactForm.reset();
});
