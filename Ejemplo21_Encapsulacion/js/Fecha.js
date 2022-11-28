class Fecha{

    //propiedades publicas
    dia;
    mes;
    anyo;

    //Constructor

    constructor(dia, mes, anyo){
        this.dia = dia;
        this.mes = mes;
        this.anyo = anyo;
    }

    //Metodos
    mostrarFecha(){
        return this.dia + "/" + this.mes + "/" + this.anyo;
    }
}