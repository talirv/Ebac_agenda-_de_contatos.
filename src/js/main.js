const form = document.getElementById('form-agenda');
let linhas =''; 

form.addEventListener('submit', function(e){
  e.preventDefault(); 

  const inputNome = document.getElementById('nome-Adicionado');
  const inputNumero = document.getElementById ('numero-Adicionado');

  let linha = '<tr>'; 
  linha += `<td> ${inputNome.value}`; 
  linha += `<td> ${inputNumero.value}`;
  linha += `</tr>`; 

  linhas+=linha; 

  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas; 



  inputNome.value='';
  inputNumero.value=''; 
});
