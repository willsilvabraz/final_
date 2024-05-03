fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('data-list');
        data.forEach(item => {
            const tr = document.createElement('tr');

            const tdDescricao = document.createElement('td');
            tdDescricao.textContent = item.Descrição || '-';
            tr.appendChild(tdDescricao);

            const tdPreco = document.createElement('td');
            tdPreco.textContent = item.Preco || '-';
            tr.appendChild(tdPreco);

            const tdCategoria = document.createElement('td');
            tdCategoria.textContent = item.Categoria || '-';
            tr.appendChild(tdCategoria);

            const tdMarca = document.createElement('td');
            tdMarca.textContent = item.Marca || '-';
            tr.appendChild(tdMarca);

            const tdNome = document.createElement('td');
            tdNome.textContent = item.nome || '-';
            tr.appendChild(tdNome);

            const tdQuantidade = document.createElement('td');
            tdQuantidade.textContent = item.Quantidade || '-';
            tr.appendChild(tdQuantidade);

            dataList.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao recuperar dados:', error));
