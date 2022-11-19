function matematicas(){
    document.write("log 1000: " + Math.log(1000) + "<br/>");
    document.write("exp 3: " + Math.exp(3) + "<br/>");
    document.write("Raiz de 25: " + Math.sqrt(25) + "<br/>");
    document.write("Potencia 2 elevado a 4: " + Math.pow(2,4) + "<br/>");
    document.write("valor absoluto de -4,365: " + Math.abs(-4.365) + "<br/>");
    document.write("redondeo a la baja -4,365: " + Math.floor(-4.365) + "<br/>");
    document.write("redondeo a la baja 4,365: " + Math.floor(4.365) + "<br/>");
    document.write("redondeo a la alta -4,365: " + Math.ceil(-4.365) + "<br/>");
    document.write("redondeo a la alta 4,365: " + Math.ceil(4.365) + "<br/>");
    document.write("coseno de 100: " + Math.cos(100) + "<br/>");

    with(Math){
        document.write("Pi: "+PI);
    }
}

function textos(){
    let texto = "Esto es un texto para probar las funciones String";

    document.write("Caracter a partir de unicode: " + String.fromCharCode(74) + "<br/>");
    document.write("Charcode de la posicion 3: " + texto.charCodeAt(3) + "<br/>");
    document.write("Posicion de a: " + texto.indexOf("a") + "<br/>");
    document.write("ultima posicion de a: " + texto.lastIndexOf("a") + "<br/>");
    document.write("substring 3,6: " + texto.substr(3,6) + "<br/>"); 
    document.write("slice 3,6 " + texto.slice(3,6) + "<br/>"); 
    document.write("substring 3,6: " + texto.substring(3,6) + "<br/>");
    document.write("minusculas: " + texto.toLowerCase() + "<br/>");  
    document.write("mayusculas: " + texto.toUpperCase() + "<br/>");  

}

function fechas(){
    let date = new Date();

    document.write("Get time: " + date.getTime()+"<br/>");
    document.write("Diferencia horaria: " + date.getTimezoneOffset()+"<br/>");
    document.write("Dia dela semana " + date.getDay()+"<br/>");
    document.write("dia del mes: " + date.getDate()+"<br/>");
    document.write("Mes: " + date.getMonth()+"<br/>");
    document.write("Año: " + date.getYear()+"<br/>");
    document.write("Año completo: " + date.getFullYear()+"<br/>");
    document.write("Horas: " + date.getHours()+"<br/>");
    document.write("Minutos: " + date.getMinutes()+"<br/>");
    document.write("Segundos: " + date.getSeconds()+"<br/>");
    document.write("Milisegundos: " + date.getMilliseconds()+"<br/>");
}