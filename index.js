/* react depende de 2 parquetes el paquete react y el paquete react-dom */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Creamos nuestro componente, en ecmascript6 tenemos la palabra reservada class */

class Listado extends Component{
 constructor(props) {
     super(props);
 }
/* Renderizamos listas */

render(){
    const {usuarios} = this.props;
return(
    <ul>
        {usuarios.map((usuario,index) => (<li key={index}>Este es el usuario {usuario}</li>))}
    </ul>
);
}
}

class HolaReact extends Component{
/* Component: le otorga a la clase HolaReact toda la funcionalidad y el comportamientp del componente */

constructor(props){
/*  dentro de constructor vamos a usar super que va implementar los metodos y funcionalidades
 que tiene Component dentro HolaReact o los componentes que hayamos creado, esto es sencial
 a la hora de trabajar con proopiedades y luego con estados */
    super(props);

    this.state = {
        mostrarListado:true
    };
}

showListado(){
this.setState({ mostrarListado:!this.state.mostrarListado});
}

renderListado(usuarios){
const { mostrarListado } = this.state;

if(mostrarListado){
    return <Listado usuarios={usuarios} />;
}else{
    return <h2>No hay Listado Disponible...</h2>;
}
}

 render(){
    /*  destructuramos,creamos una variable con este nombre que me traiga la misma inforemacion que tiene este objeto */
/* const { lenguaje } = this.props; */

 const usuarios = [1,2,3,4];
     return (
     <div>
    {this.renderListado(usuarios)}
    <button onClick={() => this.showListado()}>Mostrar Listado</button>
     </div>
     );
 }
}
/* Añadimos un property que sea lenguaje y le añadimos React.js */
ReactDOM.render(<HolaReact />,document.getElementById('app'));
/* ReactDOM necesita que le indique donde quieres que se muestre,vamos al index.html */
