//BTN Login
const login = document.getElementById('btn-login');
let email = ''
let activate = false

login.onclick = function () {
    email = prompt("Digite seu email para fazer login:")
    while(email.trim() === '') {
        email = prompt("Digite seu email para fazer login:")
    }
    activate = true
    if (activate === true) {
        codeEmail()
    } else {
    console.log('Erro')
}
}
//





//Gerador de números
function numbers() {
    let result = []
    for (let i = 1;i <= 5; i+=1) {
        let number = Math.floor(Math.random() * (10 - 0 + 1)) + 0
        result.push(number)
    }
    return result.join('')
}
//


const code = numbers()


//Configurações do email que irá enviar o código de acesso
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'EMAIL',
        pass: 'SENHA',
    }
});
//

//Função
function codeEmail(){
    emailCode = transport.sendMail ({
        from: 'Go Travel <EMAIL>',
        to: 'EMAIL',
        subject: 'Código de acesso',
        html: `<h1>GO TRAVEL - Código</h1><p>O seu código de acesso é: ${code}</p>`,
        text: 'Código não deu certo',
    })
    .then(() => console.log('Email enviado com sucesso'))
    .catch((err) => console.log('Erro', err));
}
//


//BTN de compra
const compra = document.getElementById('btn-compra');
let passagem = ''

compra.onclick = function() {
    if(email == null || email.trim() == '') {
        alert('Faça login primeiro')
    } else {
        passagem = prompt(`${email}\nQuantas passagens você quer comprar?`)
        while(passagem.trim() == '') {
            passagem = prompt(`${email}\nQuantas passagens você quer comprar?`)
        } alert(`${email}\nComprou ${passagem}!!`)
    }
}
//