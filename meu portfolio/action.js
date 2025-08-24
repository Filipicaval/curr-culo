const form = document.getElementById("form-contato");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("mensagem-sucesso").style.display = "block";
});