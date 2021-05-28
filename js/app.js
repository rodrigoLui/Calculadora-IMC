var Res = document.querySelector('div.res')
var Bnt = document.getElementById('bnt')

function bmi() {
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var result = peso/Math.pow(altura,2) 
    
    if (result <= 18.5) {
      return Res.innerHTML = "Abaixo do Peso";
    } else if (result <= 25) {
      return Res.innerHTML = "Peso Ideal";
    } else if (result <= 30) {
      return Res.innerHTML = "Sobrepeso";
    } else if (result > 30){
      return Res.innerHTML = "Obeso";
    }
}
Bnt.addEventListener('click', bmi)