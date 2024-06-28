alert("Hola, me llamo Miguel y estudio en la escuela UAT\nEste es mi primer trabajo con JavaScript en este curso, veamos cómo funciona\n");

// Solicitar datos para las figuras
let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
let ladoTriangulo = parseFloat(prompt("Ingrese el lado del triángulo equilátero:"));
let baseMayor = parseFloat(prompt("Ingrese la base mayor del trapecio:"));
let baseMenor = parseFloat(prompt("Ingrese la base menor del trapecio:"));
let alturaTrapecio = parseFloat(prompt("Ingrese la altura del trapecio:"));
let lado1Trapecio = parseFloat(prompt("Ingrese el primer lado del trapecio:"));
let lado2Trapecio = parseFloat(prompt("Ingrese el segundo lado del trapecio:"));

// Cálculos para el círculo
let perimetroCirculo = (2 * Math.PI * radio).toFixed(2);
let areaCirculo = (Math.PI * radio * radio).toFixed(2);

// Cálculos para el triángulo equilátero
let perimetroTriangulo = (3 * ladoTriangulo).toFixed(2);
let areaTriangulo = ((Math.sqrt(3) / 4) * ladoTriangulo * ladoTriangulo).toFixed(2);

// Cálculos para el trapecio
let perimetroTrapecio = (parseFloat(baseMayor) + parseFloat(baseMenor) + parseFloat(lado1Trapecio) + parseFloat(lado2Trapecio)).toFixed(2);
let areaTrapecio = (((parseFloat(baseMayor) + parseFloat(baseMenor)) * alturaTrapecio) / 2).toFixed(2);

// Resultados
document.write("<h1>Hola, me llamo Miguel y estudio en la escuela UAT</h1>");
document.write("<p>Este es mi primer trabajo con JavaScript en este curso, veamos cómo funciona</p>");
document.write("<p>El perímetro del círculo es: " + perimetroCirculo + "</p>");
document.write("<p>El área del círculo es: " + areaCirculo + "</p>");
document.write("<p>El perímetro del triángulo equilátero es: " + perimetroTriangulo + "</p>");
document.write("<p>El área del triángulo equilátero es: " + areaTriangulo + "</p>");
document.write("<p>El perímetro del trapecio es: " + perimetroTrapecio + "</p>");
document.write("<p>El área del trapecio es: " + areaTrapecio + "</p>");
document.write("<p>¿Quedaron bien los resultados? Gracias por usar esta página</p>");
document.write("<p>Un saludo cósmico</p>");