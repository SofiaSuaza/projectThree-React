import React, { useState, useRef } from 'react';

const VirtualDomPage = () => {
  /*
  El Virtual DOM es una representación ligera y eficiente del DOM real.
  React mantiene esta copia virtual para comparar cambios y actualizar solo
  las partes necesarias en la interfaz, mejorando el rendimiento.

  Este ejemplo muestra cuántas veces se ha renderizado este componente,
  ayudándote a entender cómo React decide cuándo actualizar la UI.
  */

  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div>
      <h1>Virtual DOM en React</h1>
      <p>
        React utiliza un Virtual DOM para minimizar operaciones en el DOM real,
        mejorando velocidad y eficiencia.
      </p>
      <p>Este componente se ha renderizado <b>{renderCount.current}</b> veces.</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '8px 16px' }}>
        Incrementar contador: {count}
      </button>
    </div>
  );
};

export default VirtualDomPage;
