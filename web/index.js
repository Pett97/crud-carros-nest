const URL_BASE = "http://localhost:3000/carro/";

document.addEventListener('DOMContentLoaded', function () {
  async function getCarros() {
    try {
      const response = await axios.get(URL_BASE);
      console.log("Carros:", response.data);
    } catch (error) {
      console.error("Erro ao buscar os carros:", error);
    }
  }

  getCarros();
});
