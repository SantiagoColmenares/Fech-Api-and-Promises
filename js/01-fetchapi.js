const URL_API = 'data/campers.json';
const boton = document.querySelector('#boton'); 

boton.addEventListener('click', loadData)
function loadData(){
    fetch(URL_API)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        viewHTML(data);
    })
    
}; 



function viewHTML(myData){
    const div = document.querySelector('#contenedor');
    const {id,nombre,edad,ingles} = myData;
    div.innerHTML= /* html */`
    <p>Id : ${id}</p>
    <p>Nombre : ${nombre}</p>
    <p>Edad : ${edad}</p>
    <p>Nivel de Ingles : ${ingles}</p>
    `
};

