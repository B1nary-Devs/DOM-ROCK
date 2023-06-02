async function carregarVendedores() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor');
      const vendedores = response.data;
  
      const selectVendedor = document.getElementById('selectVendedor');
  
      vendedores.forEach(vendedor => {
        const option = document.createElement('option');
        option.value = vendedor.id;
        option.text = `Vendedor: ${vendedor.nome}`;
        selectVendedor.appendChild(option);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  async function carregarRegistros(idVendedor) {
    try {
      const response = await axios.get(`http://localhost:8080/vendedor/${idVendedor}`);
      const vendedor = response.data;
  
      const selectRegistros = document.getElementById('selectRegistros');
  
     
  
      vendedor.registros.forEach(registro => {
        const option = document.createElement('option');
        option.value = registro.id;
        option.text = `Cliente: ${registro.cliente.nome} - Produto: ${registro.produto.nome}`;
        selectRegistros.appendChild(option);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function adicionarEventoDeMudanca() {
    const selectVendedor = document.getElementById('selectVendedor');
    const selectRegistros = document.getElementById('selectRegistros');
  
    selectVendedor.addEventListener('change', async () => {
      selectRegistros.innerHTML = ''; // Limpar o conteúdo do select antes de carregar os registros
      const selectedId = selectVendedor.value;
      await carregarRegistros(selectedId, false); // Passar o parâmetro limparSelect como false para não limpar o select novamente
    });
  }
  
  
  
  document.addEventListener('DOMContentLoaded', async () => {
    await carregarVendedores();
    await carregarRegistros();
    adicionarEventoDeMudanca();
  });
  