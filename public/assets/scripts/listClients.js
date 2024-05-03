fetch('http://localhost:3000/clientes')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('data-list');
        data.forEach(item => {
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            tdNome.textContent = item.nome || '-';
            tr.appendChild(tdNome);

            const tdSobrenome = document.createElement('td');
            tdSobrenome.textContent = item.sobrenome || '-';
            tr.appendChild(tdSobrenome);

            const tdTelefone = document.createElement('td');
            tdTelefone.textContent = item.telefone || '-';
            tr.appendChild(tdTelefone);

            const tdEndereco = document.createElement('td');
            tdEndereco.textContent = item.endereco || '-';
            tr.appendChild(tdEndereco);

            const tdEmail = document.createElement('td');
            tdEmail.textContent = item.email || '-';
            tr.appendChild(tdEmail);

            const tdCpf = document.createElement('td');
            tdCpf.textContent = item.cpf || '-';
            tr.appendChild(tdCpf);

            const tdCnpj = document.createElement('td');
            tdCnpj.textContent = item.cnpj || '-';
            tr.appendChild(tdCnpj);

            dataList.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao recuperar dados:', error));
