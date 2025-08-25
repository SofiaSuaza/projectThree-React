import React, { useState } from 'react';

const PropsPage = () => {
  /*
  Las *props* (propiedades) en React son un mecanismo para pasar datos
  de un componente padre a sus componentes hijos. Son inmutables desde
  el punto de vista del componente hijo, lo que garantiza que la comunicación
  sea unidireccional y que el flujo de datos sea predecible.

  En este ejemplo interactivo, creamos un conversor de temperatura que convierte
  entre Celsius y Fahrenheit. El componente padre controla el estado y pasa
  los valores y funciones necesarias como props a los componentes hijos,
  que muestran y actualizan las temperaturas.
  */

  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // 'c' o 'f'

  const toCelsius = f => ((f - 32) * 5) / 9;
  const toFahrenheit = c => (c * 9) / 5 + 32;

  const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';
    const output = convert(input);
    return Math.round(output * 1000) / 1000;
  };

  const handleCelsiusChange = value => {
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = value => {
    setTemperature(value);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  const CelsiusInput = ({ celsius, onChange }) => (
    <div className="temperature-input">
      <label className="temperature-label">
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={e => onChange(e.target.value)}
          className="temperature-field"
          placeholder="Ingresa la temperatura"
        />
      </label>
    </div>
  );

  const FahrenheitInput = ({ fahrenheit, onChange }) => (
    <div className="temperature-input">
      <label className="temperature-label">
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={e => onChange(e.target.value)}
          className="temperature-field"
          placeholder="Ingresa la temperatura"
        />
      </label>
    </div>
  );

  return (
    <div className="props-container">
      <div className="props-content">
        <h1 className="page-title">Props (Propiedades) en React</h1>
        
        <img 
          src="https://miro.medium.com/v2/resize:fit:1400/1*Hd9mxF3P6WNCx_ndAhch-g.jpeg" 
          alt="React Props Illustration" 
          className="props-image"
        />
        
        <div className="props-explanation">
          <p className="explanation-paragraph">
            Las <strong>props</strong> (propiedades) son el mecanismo fundamental que React utiliza para la comunicación entre componentes. Son argumentos que se pasan de un componente padre a sus componentes hijos, similar a cómo las funciones reciben parámetros. Las props permiten que los componentes sean reutilizables y mantengan la separación de responsabilidades.
          </p>
          <p className="explanation-paragraph">
            Una característica esencial de las props es que son <strong>inmutables</strong> desde la perspectiva del componente hijo. Esto significa que un componente hijo no puede modificar directamente las props que recibe, lo que garantiza un flujo de datos unidireccional y predecible. Esta inmutabilidad es fundamental para el paradigma de React y ayuda a evitar efectos secundarios no deseados.
          </p>
          <p className="explanation-paragraph">
            Las props pueden contener cualquier tipo de dato: strings, números, booleanos, objetos, arrays, e incluso funciones. Cuando se pasan funciones como props, se habilita la comunicación desde el hijo hacia el padre, permitiendo que los componentes hijos notifiquen cambios o eventos al componente padre. Este patrón se conoce como "lifting state up" (elevar el estado).
          </p>
          <p className="explanation-paragraph">
            <strong>Ventajas de las props:</strong> facilitan la reutilización de componentes, mantienen el código modular y organizando, permiten crear componentes más flexibles y configurables, establecen un contrato claro entre componentes padre e hijo, y simplifican las pruebas al hacer los componentes más predecibles y fáciles de testear de forma aislada.
          </p>
        </div>

        <div className="example-section">
          <p className="example-intro">
            En este conversor de temperatura interactivo, el componente padre maneja todo el estado y pasa 
            los valores y funciones de actualización como props a los componentes hijos especializados.
          </p>

          <div className="converter-widget">
            <CelsiusInput celsius={celsius} onChange={handleCelsiusChange} />
            <FahrenheitInput fahrenheit={fahrenheit} onChange={handleFahrenheitChange} />

            <div className="conversion-result">
              <p className="result-text">
                Conversión actual: <span className="temperature-value">{celsius || '0'} °C</span> = <span className="temperature-value">{fahrenheit || '0'} °F</span>
              </p>
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

export default PropsPage;