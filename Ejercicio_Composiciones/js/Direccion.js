class Direccion{
    
    //Atributos
    #calle;
    #numero;
    #poblacion;

    constructor(calle, numero, poblacion){
        this.setCalle(calle);
        this.setNumero(numero);
        this.setPoblacion(poblacion);
    }
    
    mostrarInfo(){
        return "Calle: " + this.getCalle() + " nº " + this.getNumero() + " poblacion: " + this.getPoblacion();
    }

    //Getter y setters
    setCalle(calle){
        this.#calle = calle;
    }
    
    getCalle(){
        return this.#calle;
    }

    setNumero(numero){
        this.#numero = numero;
    }

    getNumero(){
        return this.#numero;
    }

    setPoblacion(poblacion){
        this.#poblacion = poblacion;
    }

    getPoblacion(){
        return this.#poblacion;
    }
}