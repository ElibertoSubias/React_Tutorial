let lenguajes = ['JavaScript', 'PHP', 'Python'];
//let frameworks = ['React', 'Laravel', 'Django'];

//Anterior
//let combinacion = lenguajes.concat(frameworks);

//Nueva
//let combinacion = [...lenguajes,...frameworks];

//Clonar Objeto 
// let [ultimo] = [...lenguajes].reverse();
// console.log(lenguajes);
// console.log(ultimo);


function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];

suma(...numeros);