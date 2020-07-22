const persona = [
    {nombre : 'Pedro', edad : 28, aprendiendo : 'PHP'},
    {nombre : 'Cristian', edad : 21, aprendiendo : 'LAravel'},
    {nombre : 'Carmen', edad : 24, aprendiendo : 'AngularJS'},
    {nombre : 'Luis', edad : 30, aprendiendo : 'JS'},
    {nombre : 'Angel', edad : 29, aprendiendo : 'JX'}
]

console.log(persona);

const mayores = persona.filter(persona => {
    return persona.edad > 28;
});
console.log(mayores);

//find

//reduce
let total = persona.reduce((edadtotal, persona) => {
    return edadtotal + persona.edad;
}, 0);
console.log(total / persona.length);
