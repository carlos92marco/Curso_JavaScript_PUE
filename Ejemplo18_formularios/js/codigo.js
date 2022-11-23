function mostrar(){
    event.preventDefault(); //Cancela el evento submit para que no se recarge la pagina
    console.log("Nombre: " + document.getElementById("nombreTxt").value);
    console.log("Apellido: " + formulario.apellidoTxt.value);
    console.log("Edad:" + formulario.edadTxt.value);
    console.log("Email: " + formulario.urlTxt.value);
    console.log("Fecha nacimiento: " + formulario.fechaTxt.value);
    console.log("Sexo: " + formulario.sexoTxt.value);
    console.log("Nivel de estudios: " + formulario.estudiosTxt.options[formulario.estudiosTxt.selectedIndex].text);
    for(let i in formulario.cursosTxt.options){
        if(formulario.cursosTxt.options[i].selected){
            console.log("Curso realizado: " + formulario.cursosTxt.options[i].text);
        }
    }
}

function completar(){
    //En el select de estudios agregar dos opciones: Master y doctorado.

    let option = new Option("Master", "master");
    formulario.estudiosTxt.options[formulario.estudiosTxt.options.length] = option;
    option = new Option("Doctorado", "doctorado");
    formulario.estudiosTxt.options[formulario.estudiosTxt.options.length] = option;

    //En el select de cursos agregar java y python
    
    option = new Option("Python", "python");
    console.log(formulario.estudiosTxt.options.length);
    formulario.cursosTxt.options[formulario.cursosTxt.options.length-1] = option;
    
    option = new Option("Java", "java");
    console.log(formulario.estudiosTxt.options.length);
    formulario.cursosTxt.options[formulario.cursosTxt.options.length] = option;
    
    

}