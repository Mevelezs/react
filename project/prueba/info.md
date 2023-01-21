<!-- En eldocumentohtml -->
<div id="app"></div>

// para crear un componemte de react desde cero y sin instalar nada, seimporta el ReactDom (que es el que manipule el dom) desde el cliente de react
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

// se recupera el elmento desde el dom con el id
const appDomElement = document.getElementById('app');

// se hace una instacia de ReactDom para Crear la raíz del arbol del Dom y se le pasa el elemeto (puede contener una app completa)
const root = ReactDOM.createRoot(appDomElement);

// hasta ahora no se ha creado el eelmeto a randerizar; para crearlo necesitamon importar React y con una inatancia de éste Crear el elemento;
 import React from "https://esm.sh/react@18.2.0";

// creamos esta vez un boton. El primet parámetro es la etiqueta, el segundo los atributos y el tercero la cadena de texto del boton'
const button = React.createElement('button', {clasName:'button'}, 'Me gusta');
// por último la decimos al arbol que renderice el elemento.
root.render( button )
// usando los empaquetadores se puede pasar el burron como una función

// React solo renderiza un elemento, si se quiere renderizar más de un boton se encierran en un fractmen y se pasan como tercer paramatro dentro de un arreglo

/*
const button1 = React.createElement('button', null, 'Me gusta');
const button2 = React.createElement('button', null, 'Me gusta');
const button3 = React.createElement('button', null, 'Me gusta');

const app = React.createElement(React.Fragment, null, [button1, button2, button3])

root.render(app) 
*/

ESTA FORMA SERIA PARA APLICACIONES DE ESCRITORIOS O WEB QUE TIENEN EMPAQUETEDORES DE REACT, LOS IMPORS NO FUNCIONAN SIN EL EMPAQUETADOR
