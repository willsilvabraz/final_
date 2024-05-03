app.post('/vender', async (req, res) => {
    try {
      const { clienteId, produtoId, quantidade } = req.body;
  
      const clienteDoc = await db.collection('clientes').doc(clienteId).get();
      const produtoDoc = await db.collection('produtos').doc(produtoId).get();
  
      if (!clienteDoc.exists || !produtoDoc.exists) {
        return res.status(404).send('Cliente ou produto não encontrado.');
      }
  
      const clienteData = clienteDoc.data();
      const produtoData = produtoDoc.data();
  
      if (quantidade > produtoData.Quantidade) {
        return res.status(400).send('Quantidade insuficiente em estoque.');
      }
  
      const totalVenda = quantidade * produtoData.Preco;
  
      const vendaData = {
        cliente: clienteData,
        produto: produtoData,
        quantidade,
        total: totalVenda,
        data: admin.firestore.Timestamp.now() 
      };
  
      await db.collection('vendas').add(vendaData);
  
      await db.collection('produtos').doc(produtoId).update({
        Quantidade: produtoData.Quantidade - quantidade
      });
  
      res.send('Venda realizada com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar venda:', error);
      res.status(500).send('Erro ao realizar venda');
    }
  });
  