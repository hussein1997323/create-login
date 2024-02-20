// Esta função é chamada quando o formulário de criação de conta é enviado
function criarConta(event) {
    // Evita o comportamento padrão do formulário de atualizar a página
    event.preventDefault();

    // Obtém o valor do campo de email
    var email = document.querySelector('.email').value;
    
    // Obtém o valor do campo de senha
    var password = document.querySelector('.password').value;

    // Verifica se o email e a senha correspondem a um conjunto específico
    if (email === 'hussein@gmail.com' && password === '123') {
        // Se as credenciais forem válidas, redireciona o usuário para a página de início
        window.location.href ='./html/home.html';
        // Retorna verdadeiro para permitir o envio do formulário
        return true;
    } else {
        // Se as credenciais não forem válidas, exibe um alerta pedindo para preencher os campos corretamente
        alert('Por favor, preencha todos os campos corretamente.');
        // Retorna falso para evitar o envio do formulário
        return false;
    }
}
