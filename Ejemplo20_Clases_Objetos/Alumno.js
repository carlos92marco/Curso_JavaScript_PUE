class Alumno{

    //propiedades, atributos, campos, caracteristicas
    nombre;
    apellido;
    nota;
    
    //Acciones, metodos

    mostrarInformacion(){
        return "Nombre: " + this.nombre + "\nApellido: " + this.apellido + "\nNota: " + this.nota;
    }

    //Constructor

    constructor(nombre, apellido, nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota
    }

}