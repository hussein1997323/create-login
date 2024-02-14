function criarConta(event) {
    event.preventDefault();

    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;

    if (email === 'hussein@gmail.com' && password === '123') {
       
        window.location.href ='./html/home.html'
        
        return true;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    }
}