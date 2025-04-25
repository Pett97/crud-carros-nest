import URL_BACKEND from './const.mjs';
const URL_BASE = URL_BACKEND;

document.addEventListener('DOMContentLoaded', function () {
  localStorage.clear();

  async function getCarros() {
    try {
      const response = await axios.get(URL_BASE);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os carros:', error);
    }
  }

  async function montarTabelaCarros() {
    let carros = await getCarros();
    if (!carros) {
      alert('não foi possivel buscar os carros');
      return;
    }

    const corpoTabela = carros
      .map(
        (carro) => `
      <tr>
        <td>${carro.id}</td>
        <td>${carro.marca}</td>
        <td>${carro.modelo}</td>
        <td>${carro.hp}</td>
        <td>
          <div id="acoes">
            <button onclick="editarCarro(event)" data-id="${carro.id}">Editar</button>
            <button onclick="deletarCarro(event)" data-id="${carro.id}">Deletar</button>
          </div>
        </td>
      </tr>
    `,
      )
      .join('');

    document.getElementById('tabela-carros').innerHTML = corpoTabela;
  }

  window.editarCarro = function (event) {
    let idCarro = event.target.getAttribute('data-id');
    localStorage.setItem('idCarroEditar', idCarro);
    if (localStorage.getItem('idCarroEditar')) {
      window.location.href = './edit/edit.html';
    }
  };

  window.deletarCarro = async function (event) {
    let idCarro = event.target.getAttribute('data-id');
    if (!idCarro) {
      alert('não foi possivel buscar o id carro');
    }
    try {
      const response = await axios.delete(`${URL_BASE}/${idCarro}`);
      if (response.status === 200 || response.status === 204) {
        alert('Carro deletado com sucesso');
        window.location.reload();
      } else {
        alert('Não foi possível deletar o carro');
      }
    } catch (error) {
      console.error(error);
    }
  };

  getCarros();
  montarTabelaCarros();
});
