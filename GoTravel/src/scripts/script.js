const login = document.getElementById('btn-login')
const compra = document.getElementById('btn-compra')
let email = ''
let passagem = ''

login.onclick = function () {
    email = prompt("Digite seu email para fazer login:")
    while(email.trim() === '') {
        email = prompt("Digite seu email para fazer login:")
    }
    alert(`O seu email é: ${email}`)
}

compra.onclick = function() {
    if(email.trim() == '') {
        alert('Faça login primeiro')
    } else {
        passagem = prompt(`${email}\nQuantas passagens você quer comprar?`)
        while(passagem.trim() == '') {
            passagem = prompt(`${email}\nQuantas passagens você quer comprar?`)
        } alert(`${email}\nComprou ${passagem}!!`)
    }
}