async function cadastrarCliente() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cep = document.getElementById('cepInput').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const cnpj = document.getElementById('cnpj').value;

    const data = {
        nome,
        sobrenome,
        cep,
        endereco,
        email,
        telefone,
        cpf,
        cnpj
    };

    try {
        const response = await fetch('http://localhost:3000/cadastrarClientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Cliente cadastrado com sucesso!');
            window.location.reload();
            document.getElementById('clienteForm').reset();
        } else {
            alert('Erro ao cadastrar cliente. Por favor, tente novamente.');
        }
    } catch (error) {
    
    }
}