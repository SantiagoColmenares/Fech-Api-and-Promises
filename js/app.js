const persona = {
    nombre: 'Tony',
    edad:45,
    clave:'Ironman'
};

/* console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

const { edad } = persona;

console.log( edad ); */

const useContext = ({clave, nombre:nuevoNombre, edad, rango = 'capitan'}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        nombre: nuevoNombre,
        range: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
        
    }
}

const { range,nombre,nombreClave,anios,latlng: { lat, lng } } = useContext( persona );

console.log(range,nombre,nombreClave, anios);
console.log( lat, lng ); 

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras,numeros);