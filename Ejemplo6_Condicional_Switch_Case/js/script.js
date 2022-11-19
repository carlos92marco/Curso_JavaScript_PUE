function cambiarColor(event){
    switch (event.target.id) {
        case "btn1":
            document.getElementById("btn1").className="rojo";
            break;

        case "btn2":
            document.getElementById("btn2").className="verde";
            break;

        case "btn3":
            document.getElementById("btn3").className="azul";

    }

}