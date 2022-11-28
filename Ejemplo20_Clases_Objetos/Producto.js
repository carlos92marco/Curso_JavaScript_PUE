class Producto{

    id;
    descripcion;
    precio;

    mostrarInformacion(){
        return "Producto con id: " + this.id + " Descripcion: " + this.descripcion + " Precio: " + this.precio;
    }

    constructor(id, descripcion, precio){
        this.descripcion = descripcion;
        this.id = id;
        this.precio = precio;
    }
}