// document.querySelector("#btnSomar").addEventListener("click", somarValores);

// function somarValores() {
//     var n1 = parseFloat(document.querySelector("#numero1").value);
//     var n2 = parseFloat(document.querySelector("#numero2").value);
//     var soma = n1 + n2;
//     document.querySelector("#resultado").value = soma;
// }


const bSomar=document.querySelector("#btnSomar"); //estou passando o elemento button para a constante. Isso significa que ela assumirá o primeiro valor atribuído a ela e não mudará mais

bSomar.addEventListener("click", ()=> {
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    somar(n1, n2);
});


function somar(p1, p2) {
    var soma = p1 + p2;
    document.querySelector("#resultado").value = soma;
}

//


document.querySelector("#btnCalcular").addEventListener("click", calcularIMC);

const bCalcular=document.querySelector("#btnCalcular");

bCalcular.addEventListener("click", ()=> {
    var altura = parseFloat(document.querySelector("#altura").value);
    var peso = parseFloat(document.querySelector("#peso").value);
    calcularIMC(altura, peso);
});


function calcularIMC(altura, peso) {
    var imc = peso / (altura * altura);
    document.querySelector("#indice").value = indice;
}