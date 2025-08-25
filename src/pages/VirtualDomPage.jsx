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
    <div className="virtual-dom-container">
      <div className="virtual-dom-content">
        <h1 className="page-title">Virtual DOM en React</h1>
        
        <img 
          src="https://miro.medium.com/v2/resize:fit:600/1*EkaI692MvwaBFfKdAbJgnQ.png" 
          alt="Virtual DOM Illustration" 
          className="virtual-dom-image"
        />
        
        <div className="virtual-dom-explanation">
          <p className="explanation-paragraph">
            El <strong>Virtual DOM</strong> es una representación en memoria del DOM real, implementada como una estructura de datos en JavaScript. Es una copia ligera y virtual que React mantiene para optimizar las actualizaciones de la interfaz de usuario. En lugar de manipular directamente el DOM del navegador (que es lento), React trabaja con esta representación virtual.
          </p>
          <p className="explanation-paragraph">
            El proceso funciona en tres fases: <strong>Representación Virtual</strong> - React crea elementos JavaScript que representan la estructura del DOM; <strong>Reconciliación</strong> - cuando el estado cambia, React compara el Virtual DOM actual con el anterior usando un algoritmo de "diffing"; y <strong>Actualización Selectiva</strong> - solo los elementos que realmente cambiaron son actualizados en el DOM real.
          </p>
          <p className="explanation-paragraph">
            <strong>Ventajas del Virtual DOM:</strong> Mejora significativamente el rendimiento al minimizar manipulaciones costosas del DOM, permite actualizaciones por lotes (batch updates), facilita la predictibilidad del comportamiento de la aplicación, hace posible el renderizado del lado del servidor, y simplifica el desarrollo al abstraer las complejidades de la manipulación manual del DOM.
          </p>
          <p className="explanation-paragraph">
            El algoritmo de <strong>reconciliación</strong> de React es altamente optimizado y utiliza heurísticas para comparar árboles de componentes de manera eficiente. Asume que elementos de diferente tipo producen árboles diferentes, y utiliza keys para identificar elementos de lista de manera estable a través de diferentes renders.
          </p>
        </div>

        <div className="example-section">
          <p className="example-intro">
            Este contador demuestra cómo React controla los re-renders. Cada vez que cambias el estado, 
            React decide si necesita actualizar la UI usando el Virtual DOM.
          </p>

          <div className="counter-widget">
            <div className="render-info">
              <p className="render-text">
                Este componente se ha renderizado: <span className="render-count">{renderCount.current}</span> veces
              </p>
            </div>
            
            <div className="counter-section">
              <div className="count-display">
                <span className="count-label">Contador actual:</span>
                <span className="count-value">{count}</span>
              </div>
              
              <button 
                onClick={() => setCount(count + 1)} 
                className="increment-button"
              >
                Incrementar contador
              </button>
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

export default VirtualDomPage;