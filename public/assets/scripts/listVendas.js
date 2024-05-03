fetch('http://localhost:3000/vendas')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('data-list');
        data.forEach(item => {
            const tr = document.createElement('tr');

            const cliente = document.createElement('td');
            cliente.textContent = item.cliente || '-';
            tr.appendChild(cliente);

            const produto = document.createElement('td');
            produto.textContent = item.produto || '-';
            tr.appendChild(produto);

            const data = document.createElement('td');
            data.textContent = item.data ? new Date(item.data).toLocaleString() : '-';
            tr.appendChild(data);

            const quantidade = document.createElement('td');
            quantidade.textContent = item.quantidade || '-';
            tr.appendChild(quantidade);

            dataList.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao recuperar dados:', error));
