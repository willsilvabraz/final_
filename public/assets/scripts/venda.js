
fetch('http://localhost:3000/clientes')
            .then(response => response.json())
            .then(clientes => {
                const clientesSelect = document.getElementById('clientes');
                clientes.forEach(cliente => {
                    const option = document.createElement('option');
                    option.text = `${cliente.nome}`;
                    option.value = cliente.nome; // Substitua 'id' pelo identificador único do cliente
                    clientesSelect.add(option);
                });
            })
            .catch(error => console.error('Erro ao recuperar clientes:', error));

        fetch('http://localhost:3000/produtos')
            .then(response => response.json())
            .then(produtos => {
                const produtosSelect = document.getElementById('produtos');
                produtos.forEach(produto => {
                    const option = document.createElement('option');
                    option.text = `${produto.nome}`;
                    option.value = produto.nome;
                    produtosSelect.add(option);
                });
            })
            .catch(error => console.error('Erro ao recuperar produtos:', error));


function registrarVenda() {
    const cliente = document.getElementById('clientes').value;
    const produto = document.getElementById('produtos').value;
    const quantidade = document.getElementById('quantidade').value;

    fetch('http://localhost:3000/vender', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cliente, produto, quantidade })
    })
    .then(response => {
        if (response.ok) {
            alert('Venda registrada com sucesso!');
        } else {
            throw new Error('Erro ao registrar venda');
        }
    })
    .catch(error => {
        console.error('Erro ao registrar venda:', error);
        alert('Erro ao registrar venda. Por favor, tente novamente.');
    });
}




