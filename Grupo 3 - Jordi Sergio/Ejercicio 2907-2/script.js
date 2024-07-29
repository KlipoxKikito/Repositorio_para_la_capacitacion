function celsiusFarenheit(celsius) {
    var farenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheitOutput").value = farenheit;
    console.log(celsius);
    // return farenheit;
}

function farenheitCelsius(farenheit) {
    var celsius = (farenheit - 32) * 5/9;
    document.getElementById("celsiusOutput").value = celsius;
    console.log(farenheit);

    // return celsius;
}

// console.log(celsiusFarenheit(0));

// console.log(farenheitCelsius(32));