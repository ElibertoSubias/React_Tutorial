class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad} y a cantidad de ${this.cantidad}`);
    }
    hola() {
        return 'hola';
    }
}

let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender Laravel', 'Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
compra1.mostrar();
console.log(compra1.hola());