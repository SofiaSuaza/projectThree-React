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

  return (
    <div>
      <h1>Redux: Estado Global</h1>
      <p>
        Redux es una herramienta para manejar el estado global en apps React.
        Centraliza la información para compartirla fácilmente entre componentes.
      </p>
      <p>
        En este ejemplo puedes añadir y eliminar elementos favoritos usando Redux.
      </p>

      <input
        type="text"
        value={nuevoFavorito}
        onChange={e => setNuevoFavorito(e.target.value)}
        placeholder="Nuevo favorito"
        style={{ padding: '8px', width: '300px' }}
      />
      <button onClick={agregarFavorito} style={{ marginLeft: 8, padding: '8px' }}>
        Añadir
      </button>

      <ul style={{ marginTop: 20 }}>
        {favoritos.length === 0 && <li>No hay favoritos aún.</li>}
        {favoritos.map(item => (
          <li key={item} style={{ marginBottom: 8 }}>
            {item}
            <button onClick={() => eliminarFavorito(item)} style={{ marginLeft: 10 }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReduxPage = () => (
  <Provider store={store}>
    <ReduxPageComponent />
  </Provider>
);

export default ReduxPage;
