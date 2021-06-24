//The forecast today is 293 Kelvin
const kelvin = 293;
//Celsius is similar to Kelvin but 273 degreed less
let celsius = kelvin-273;
//Converting Celsius to Fahrenheit and rounding the results
let fahrenheit = Math.floor(celsius*(9/5)+32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

document.write(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

