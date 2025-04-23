const URL_BASE = 'http://localhost:3000/carro';

document.addEventListener('DOMContentLoaded', function () {
  const inputId = document.getElementById('id_carro');
  const inputMarca = document.getElementById('marca');
  const inputModelo = document.getElementById('modelo');
  const inputHp = document.getElementById('hp');

  const form = document.getElementById('form_edit_carro');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    document
      .getElementById('btn_atualizar')
      .addEventListener('click', atualizarCarro);

    async function atualizarCarro() {
      let idCarro = localStorage.getItem('idCarroEditar');
      let carro = {
        marca: inputMarca.value,
        modelo: inputModelo.value,
        hp: inputHp.value,
      };
      try {
        const response = await axios.patch(`${URL_BASE}/${idCarro}`, carro);
        alert('Carro atualizado com sucesso!');
        window.location.href = '../index.html';
      } catch (error) {
        console.error('Erro ao atualizar o carro:', error);
        alert('Erro ao atualizar o carro');
      }
    }
  });

  document.getElementById('btn_voltar').addEventListener('click', function () {
    window.location.href = '../index.html';
  });

  async function getCarro() {
    let idCarro = localStorage.getItem('idCarroEditar');
    if (!idCarro) {
      alert('não foi possivel buscar o ID carro');
    }
    try {
      const carro = await axios.get(`${URL_BASE}/${idCarro}`);

      if (!carro) {
        alert('erro ao buscar o carro');
      }

      inputId.value = carro.data.id;
      inputMarca.value = carro.data.marca;
      inputModelo.value = carro.data.modelo;
      inputHp.value = carro.data.hp;
    } catch (error) {
      console.error(error);
    }
  }

  getCarro();
});
