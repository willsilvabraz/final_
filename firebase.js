const admin = require('firebase-admin');
const express = require('express');
const app = express();

const serviceAccount = require('./dbkey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/cadastrarClientes', async (req, res) => {
  try {
    const { nome, sobrenome, cep, endereco, email, telefone, cpf, cnpj } = req.body;

    const clienteData = {
      nome,
      sobrenome,
      cep,
      endereco,
      email,
      telefone,
      cpf,
      cnpj
    };
    await db.collection('clientes').add(clienteData);

    res.send('Cliente cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    res.status(500).send('Erro ao cadastrar cliente');
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const snapshot = await db.collection('clientes').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar dados do Firestore' });
  }
});

app.post('/cadastrarProdutos', async (req, res) => {
  try {
    const { nome, Descrição, Preco, Quantidade , Categoria, Marca } = req.body;

    const produtoData = {
      nome,
      Descrição,
      Preco,
      Quantidade ,
      Categoria,
      Marca
    };
    await db.collection('produtos').add(produtoData);

    res.send('Produto cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).send('Erro ao cadastrar produto');
  }
});

app.get('/produtos', async (req, res) => {
  try {
    const snapshot = await db.collection('produtos').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar dados do Firestore' });
  }
});




app.post('/vender', async (req, res) => {
  try {
    const { cliente, produto, quantidade } = req.body;
    const vendaData = {
      cliente: cliente,
      produto: produto,
      quantidade,
      data: admin.firestore.Timestamp.now() 
    };

    await db.collection('vendas').add(vendaData);
    res.send('Venda realizada com sucesso!');
  } catch (error) {
    console.error('Erro ao realizar venda:', error);
    res.status(500).send('Erro ao realizar venda');
  }
});

app.get('/vendas', async (req, res) => {
  try {
    const snapshot = await db.collection('vendas').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar dados do Firestore' });
  }
});