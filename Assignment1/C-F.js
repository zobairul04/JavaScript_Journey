function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let temperature = 25;
console.log(celsiusToFahrenheit(temperature));