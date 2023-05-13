
function inputVendedorCliente() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `clientes.html?idVendedor=${idVendedor}`;
  }

function inputVendedorPlanejamento() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `index.html?idVendedor=${idVendedor}`;
}

  function inputVendedorGerenciamento() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `visualizar_plan.html?idVendedor=${idVendedor}`;
  }