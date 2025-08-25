import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

/*
Redux es una librería para manejar el estado global en aplicaciones complejas.
Permite centralizar el estado, haciendo más fácil compartir información entre
componentes sin pasar props manualmente.

Redux se basa en:
- Store: almacena el estado global.
- Actions: describen qué cambios ocurren.
- Reducers: funciones puras que calculan el nuevo estado.

Este ejemplo muestra una lista global de favoritos que puedes añadir y eliminar.
*/

const ADD_FAVORITO = 'ADD_FAVORITO';
const REMOVE_FAVORITO = 'REMOVE_FAVORITO';

const initialState = { favoritos: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITO:
      return { favoritos: [...state.favoritos, action.payload] };
    case REMOVE_FAVORITO:
      return { favoritos: state.favoritos.filter(item => item !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

const ReduxPageComponent = () => {
  const [nuevoFavorito, setNuevoFavorito] = useState('');
  const favoritos = useSelector(state => state.favoritos);
  const dispatch = useDispatch();

  const agregarFavorito = () => {
    if (nuevoFavorito.trim() === '') return;
    dispatch({ type: ADD_FAVORITO, payload: nuevoFavorito.trim() });
    setNuevoFavorito('');
  };

  const eliminarFavorito = item => {
    dispatch({ type: REMOVE_FAVORITO, payload: item });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      agregarFavorito();
    }
  };

  return (
    <div className="redux-container">
      <div className="redux-content">
        <h1 className="page-title">Redux: Gestión de Estado Global</h1>
        
        <img 
          src="https://miro.medium.com/v2/resize:fit:1200/1*-i1h4hYKGD3SH833MZWovw.jpeg" 
          alt="Redux Architecture Illustration" 
          className="redux-image"
        />
        
        <div className="redux-explanation">
          <p className="explanation-paragraph">
            <strong>Redux</strong> es una librería predecible de gestión de estado para aplicaciones JavaScript, especialmente popular con React. Su principal propósito es centralizar el estado de la aplicación en un solo lugar, conocido como "store", facilitando la compartición de datos entre componentes sin la necesidad de pasar props a través de múltiples niveles de jerarquía.
          </p>
          <p className="explanation-paragraph">
            Redux sigue tres principios fundamentales: <strong>Única fuente de verdad</strong> - todo el estado de la aplicación se almacena en un solo store; <strong>El estado es de solo lectura</strong> - la única forma de cambiar el estado es emitiendo una action; y <strong>Los cambios se hacen con funciones puras</strong> - los reducers son funciones puras que especifican cómo el estado cambia en respuesta a las actions.
          </p>
          
          <h2>Elementos principales de Redux:</h2>
          <p className="explanation-paragraph">
            <strong>Store:</strong> Es el contenedor que mantiene el estado completo de la aplicación. Proporciona métodos para acceder al estado, despachar actions y suscribirse a cambios. En una aplicación Redux, solo existe un store.
          </p>
          <p className="explanation-paragraph">
            <strong>Actions:</strong> Son objetos JavaScript planos que describen qué sucedió en la aplicación. Deben tener una propiedad 'type' que indica el tipo de action realizada. Pueden contener datos adicionales necesarios para actualizar el estado.
          </p>
          <p className="explanation-paragraph">
            <strong>Reducers:</strong> Son funciones puras que toman el estado actual y una action como argumentos, y devuelven un nuevo estado. No deben mutar el estado existente, sino crear una nueva copia con los cambios aplicados. Los reducers especifican cómo cambia el estado en respuesta a las actions.
          </p>
          <p className="explanation-paragraph">
            <strong>Ventajas de Redux:</strong> Proporciona un flujo de datos predecible, facilita el debugging con herramientas como Redux DevTools, permite el time-travel debugging, hace el estado de la aplicación más fácil de testear, mejora la escalabilidad en aplicaciones complejas, y facilita la implementación de funcionalidades como undo/redo.
          </p>
        </div>

        <div className="example-section">
          <p className="example-intro">
            En este ejemplo práctico, implementamos una lista de favoritos usando Redux. 
            El estado se mantiene globalmente y cualquier componente puede acceder y modificarlo.
          </p>

          <div className="favorites-widget">
            <div className="input-section">
              <input
                type="text"
                value={nuevoFavorito}
                onChange={e => setNuevoFavorito(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nuevo favorito (ej: Pizza, Libros, Viajar...)"
                className="favorite-input"
              />
              <button 
                onClick={agregarFavorito} 
                className="add-button"
                disabled={nuevoFavorito.trim() === ''}
              >
                Añadir
              </button>
            </div>

            <div className="favorites-list">
              <h3 className="list-title">
                Mis Favoritos ({favoritos.length})
              </h3>
              {favoritos.length === 0 ? (
                <div className="empty-state">
                  <p>No hay favoritos aún. ¡Añade tu primer elemento!</p>
                </div>
              ) : (
                <ul className="favorites-items">
                  {favoritos.map((item, index) => (
                    <li key={`${item}-${index}`} className="favorite-item">
                      <span className="favorite-text">{item}</span>
                      <button 
                        onClick={() => eliminarFavorito(item)} 
                        className="remove-button"
                        title="Eliminar favorito"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Conceptos Fundamentales React - Sofía Suaza
          </p>
          <p className="footer-description">
            Este proyecto educativo presenta los conceptos esenciales de React 
            a través de ejemplos prácticos y componentes funcionales.
          </p>
        </div>
      </footer>
    </div>
  );
};

const ReduxPage = () => (
  <Provider store={store}>
    <ReduxPageComponent />
  </Provider>
);

export default ReduxPage;