function criarConta(event) {
    event.preventDefault();

    var meuemail = 'hussein@gmail.com';
    var minhasenha = '123'; // Certifique-se de que a senha seja uma string

    var email = document.querySelector('.email').value.toLowerCase();
    var password = document.querySelector('.password').value;

    if (email === meuemail && password === minhasenha) {
       
        window.location.href ='./html/home.html'
        
        return true;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    }
}