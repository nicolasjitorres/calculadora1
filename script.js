const contenedorRes = document.getElementById('resultado');
const historial = document.getElementById('historial');
let operacion = '';

const agregar = (elemento) => {
  let res = '';
  if (elemento == '+' || elemento == '-' || elemento == '*' || elemento == '/') {
    res = manejarAgregar(contenedorRes.value, elemento);
  }else{
    res = contenedorRes.value + elemento;
  }
  contenedorRes.value = res;
  operacion = res;
};

const manejarAgregar = (op, e) => {
  let i = op.length - 1;
  let result = '';
  if (i >= 0) {
    if (op[i] == '+' || op[i] == '-' || op[i] == '*' || op[i] == '/') {
      result = op.slice(0, i) + e;
    }else{
      result = op + e;
    }
  } else if(e == '-'){
    result = op + e;
  }
  return result;
};

const borrar = () => {
  contenedorRes.value = '';
};

const calcular = () => {
  const calculo = contenedorRes.value;
  let resultado = '';
  try {
    resultado = eval(calculo).toString();
    operacion += ' = ' + resultado;
    agregarHistorial();
  } catch (error) {
    resultado = 'SYNTAX ERROR';
  }
  contenedorRes.value = resultado;
};

const agregarHistorial = () => {
  const hist = document.createElement('p');
  hist.textContent = operacion;
  hist.className = 'listaHistorial';
  historial.appendChild(hist);
  operacion = '';
};