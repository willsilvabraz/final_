async function cadastrarProdutos() {
    const Categoria = document.getElementById('Categoria').value;
    const Descrição = document.getElementById('Descrição').value;
    const Marca = document.getElementById('Marca').value;
    const Quantidade = document.getElementById('Quantidade').value;
    const nome = document.getElementById('nome').value;
    const Preco = document.getElementById('Preco').value;

    const data = {
        Categoria,
        Descrição,
        Marca,
        Preco,
        Quantidade,
        nome
    };

    try {
        const response = await fetch('http://localhost:3000/cadastrarProdutos', {
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