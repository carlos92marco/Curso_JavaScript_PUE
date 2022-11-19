//Conversiones implicitas
//String + numero -> String
let numero = 6;
document.write("Numero: " + numero + "<br/>");

//Numero + boolean -> numero
let booleano = true;
document.write(numero + booleano + "<br/>");

//Conversiones explicitas
//String -> número entero
let dato = window.prompt("Introduce un numero: ");
alert(typeof(dato));
let num = parseInt(dato, 10);
let hexadecimal = parseInt("f5cda", 16);
let octal = parseInt("0542", 8);
alert(typeof(num));
alert(hexadecimal + typeof(hexadecimal));
alert(octal + typeof(octal));

//String -> numero real
alert(parseFloat("645.3356"));

