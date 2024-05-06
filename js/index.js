for (let x=0; x<5; x++) {
    if (x==2) {
        continue;
    }
    console.log(x);
}

let a = 10;
a = a + 5;
a *= 5;

let x = 10;
x *= 5;
x **= 2;
console.log(x);

// Tipo fecha
const fecha = new Date("2024-10-10");
console.log(fecha);

function myFunction(p1=3,p2=4) {
    return p1 * p2;
}

console.log(myFunction(5,10));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction());


function otraFuncion(a,b) {
    return a * b;
}


console.log(otraFuncion(5,10));

let otraFuncion2 = (a,b) => {
    return a * b;
}

console.log(otraFuncion2(4,80));

// Funcion autoejecutable
// Funcion anonima
(function() {
    console.log("Esta es una función anónima autoejecutable");
})();

(() => console.log("Esta es una función anónima autoejecutable"))();

let alumno = {
    nombre: "Juan",
    apellido: "Perez",
    matricula: 25890,
    curso: "JavaScript",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

console.log(alumno.nombreCompleto());