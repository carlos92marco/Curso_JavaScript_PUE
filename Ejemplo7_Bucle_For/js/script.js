function cargarProvincias(){
    //array de provincias

    let arrayProvincias = new Array("Madrid", "Sevilla", "Toledo");

    for(var indice in arrayProvincias){
        document.getElementById("provincias").innerHTML +='<option>'+arrayProvincias[indice]+'</option>' ;
    }
}

function cargarPoblaciones(){
    let seleccionado = document.getElementById("provincias").selectedIndex;
    let arrayPoblaciones = null;
  
    
    switch (seleccionado) {
        case 1:
                arrayPoblaciones = ["Getafe", "Parla", "Torrelodones"];
            
            break;
        case 2:
                arrayPoblaciones = ["Dos Hermanas", "Espartinas", "Triana"];
            break;
        case 3:
                arrayPoblaciones = ["Talavera", "algo", "nizorra"];
            break;
    }
    document.getElementById("poblaciones").innerHTML = "<option>--selecciona--</option>";

    for ( var indice in arrayPoblaciones){
        var opt = new Option(arrayPoblaciones[indice], indice);
        document.getElementById("poblaciones").options[parseInt(indice)+1] = opt;
    }
}