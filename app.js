function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Pasear al perro', 'Media');

console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());