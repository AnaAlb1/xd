const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

window.onload = ()=>{
   form.addEventListener('submit', validar);
}
// validar form
function validar(e){
   e.preventDefault();
   const rfc = document.querySelector('#rfc').value
   const serie = document.querySelector('#serie').value
   const folio = document.querySelector('#folio').value
   const spinner = document.querySelector('.spinner');
   if(rfc === '' || serie === '' || folio === ''){
      mostrarAlerta("Faltan datos por llenar");
      return;
   };
   spinner.classList.add('active');

   setTimeout(()=>{
      spinner.classList.remove('active');
      // form.submit();
      window.location.href = "consulta.html"
   },4500);

}
// alerta
function mostrarAlerta(msg){
   const traslate = document.querySelector('.traslate');
   if(!traslate){
      limpiar(resultado)
      const text = document.createElement('p');
      text.textContent = msg
      resultado.classList.add('traslate')
      resultado.appendChild(text)
      setTimeout(()=>{
         resultado.classList.remove('traslate')
      },2000)
   }
}
function limpiar(classCSS){
   while(classCSS.firstChild){
      classCSS.removeChild(classCSS.firstChild);
   }
}