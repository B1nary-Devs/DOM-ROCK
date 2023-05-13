const data = registro.mesPlanejamento
const partesData = data.split("-");
const dia = partesData[2];
const mes = parseInt(partesData[1], 10) - 1;
const ano = partesData[0];
const dataString = `${meses[mes]} de ${ano}`;