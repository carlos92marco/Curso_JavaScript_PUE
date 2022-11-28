//Una clase encapsulada es aquella que define todas sus propiedades como privadas
//y se accede a ellas a traves de metodos get() y set() publicos
class FechaEncapsulada{

    //propiedades privadas
    #dia;
    #mes;
    #anyo;

    //Constructor

    constructor(dia, mes, anyo){
        this.setDia(dia);
        this.setMes(mes);
        this.setAnyo(anyo);
    }

    //Metodos
    mostrarFecha(){
        return this.#dia + "/" + this.#mes + "/" + this.#anyo;
    }

    getDia(){
        return this.#dia;
    }

    setDia(dia){
        if(dia < 1 || dia >31){
            alert("Día no valido");
        }else{
            this.#dia = dia;
        }
    }
    getMes(){
        return this.#mes;
    }

    setMes(mes){
        if(mes < 1 || mes >12){
            alert("Mes no valido");
        }else{
            this.#mes = mes;
        }
    }
    
    getAnyo(){
        return this.#anyo;
    }

    setAnyo(anyo){
        if(anyo != 2022 && anyo != 2023){
            alert("Año no valido");
        }else{
            this.#anyo = anyo;
        }
    }
    
}