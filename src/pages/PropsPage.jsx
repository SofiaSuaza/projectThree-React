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
    <div>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={e => onChange(e.target.value)}
          style={{ marginLeft: 8 }}
        />
      </label>
    </div>
  );

  const FahrenheitInput = ({ fahrenheit, onChange }) => (
    <div>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={e => onChange(e.target.value)}
          style={{ marginLeft: 8 }}
        />
      </label>
    </div>
  );

  return (
    <div>
      <h1>Props (Propiedades) en React</h1>
      <p>
        Las props son la forma en que los componentes pueden comunicarse y pasar información.
        Son inmutables para los componentes hijos y permiten que el flujo de datos sea predecible.
      </p>
      <p>
        En este ejemplo, el componente padre maneja el estado de la temperatura y pasa
        los valores y funciones para actualizarla a los componentes hijos como props.
        Los hijos no manejan el estado, solo reciben y usan las props.
      </p>

      <CelsiusInput celsius={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput fahrenheit={fahrenheit} onChange={handleFahrenheitChange} />

      <hr />

      <p>
        Conversión actual: <b>{celsius} °C</b> = <b>{fahrenheit} °F</b>
      </p>
    </div>
  );
};

export default PropsPage;
