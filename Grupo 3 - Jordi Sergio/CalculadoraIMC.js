function calcularIMC(peso, altura) {
    // Convierte los valores ingresados a números
    peso = parseFloat(peso);
    altura = parseFloat(altura)/100;

    // Calcula el IMC
    let imc = peso / (altura * altura);

    // Retorna el resultado
    // document.getElementById("resultado").textContent = imc;
    return imc;
}


// Pide al usuario los valores necesarios
let peso = 80;
let altura = 180;

// Muestra el resultado
console.log("Su IMC es: " + calcularIMC(peso, altura));