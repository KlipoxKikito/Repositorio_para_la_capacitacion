function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplo de uso
const numeroAleatorio = generarNumeroAleatorio(1, 10);
console.log(numeroAleatorio);