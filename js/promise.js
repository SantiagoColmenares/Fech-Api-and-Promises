import { getHeroeById } from './index.js';
import { getHeroeByOwner } from './index.js';
import { getHeroeByName } from './index.js';

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) =>{

        setTimeout( () => {
            const p1 = getHeroeById( id );
            if ( p1) {
                resolve( p1 );
            } else {
                reject( 'No se pudieron encontrar los heroes.' );
            }
        }, 2000)
    })
}

const getHeroeByOwnerAsync = (owner) => {
    return new Promise( (resolve, reject) =>{

        setTimeout( () => {
            const o1 = getHeroeByOwner( owner );
            if ( o1 ) {
                resolve( o1 );
            } else {
                reject( 'No se pudieron encontrar los heroes.')
            }
        }, 2000)
    })
}

const getHeroeByNameAsync = (name) => {
    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            const n1 = getHeroeByName ( name );
            if ( n1 ) {
                resolve ( n1 );
            } else {
                reject( 'No se pudieron encontrar los heroes.')
            }
        }, 2000)
    })
}

getHeroeByNameAsync('Batman')
    .then( console.log)
    .catch( console.warn );

getHeroeByOwnerAsync('Marvel')
    .then( console.log )
    .catch( console.warn);

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn);