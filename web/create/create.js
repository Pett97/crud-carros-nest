const URL_BASE = 'http://localhost:3000/carro';

document.addEventListener('DOMContentLoaded', function () {
  const inputId = document.getElementById('id_carro');
  const inputMarca = document.getElementById('marca');
  const inputModelo = document.getElementById('modelo');
  const inputHp = document.getElementById('hp');
  const form = document.getElementById("form_create_carro");

  form.addEventListener("submit",function(event){
   event.preventDefault();

   document.getElementById('btn_voltar').addEventListener('click', function () {
      window.location.href = '../index.html';
    });

   document.getElementById("btn_cadastrar",this.addEventListener("click",cadastrarCarro())); 
  
    async function cadastrarCarro() {
      let idCarro = localStorage.getItem('idCarroEditar');
      let carro = {
        marca: inputMarca.value,
        modelo: inputModelo.value,
        hp: inputHp.value,
      };
      try {
        const response = await axios.post(`${URL_BASE}`, carro);
        if (response.status === 200 || response.status === 204) {
          alert('Carro Cadastrado com sucesso!');
        }
        window.location.href = '../index.html';
      } catch (error) {
        console.error('Erro ao cadastrar  carro:', error);
        alert('Erro ao cadastrar  carro');
      }
    }

  })

  
});
