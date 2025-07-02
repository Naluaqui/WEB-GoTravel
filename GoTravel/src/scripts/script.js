const login = document.getElementById('btn-login')
login.onclick = function () {
    let email = prompt("Digite seu email para fazer login:")
    while(email.trim() === '') {
        email = prompt("Digite seu email para fazer login:")
    }
    alert(`O seu email é: ${email}`)
}