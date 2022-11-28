class Persona{

    //Atributos
    #nombre;
    #edad;
    #direccion;

    constructor(nombre, edad, direccion){
        this.setNombre(nombre);
        this.setEdad(edad);
        this.setDireccion(direccion);
        /*
         var direccion = new Direccion(calle, numero, poblacion);
        this.direccion = direccion;*/
        //this.setDireccion(calle, numero, poblacion);

    }

    setNombre(nombre){
        this.#nombre = nombre;
    }
    
    getNombre(){
        return this.#nombre;
    }

    setEdad(edad){
        if(edad > 0){
            this.#edad = edad;
        }
    }

    getEdad(){
        return this.#edad;
    }
    
    setDireccion(direccion){

        //this.#direccion = new Direccion(calle, numero, poblacion);
        this.#direccion = direccion;
    }

    getDireccion(){
        return this.#direccion;
    }

    mostrarInfo(){
        return "Nombre: " + this.getNombre() + " Edad: " + this.getEdad() + " " + this.getDireccion().mostrarInfo();
    }
    
}