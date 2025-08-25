import React, { useState, useEffect } from 'react';

const zonas = [
  { label: 'Local', value: undefined },
  { label: 'UTC', value: 'UTC' },
  { label: 'New York (EST)', value: 'America/New_York' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
];

const HooksPage = () => {
  /*
  Los hooks son funciones especiales en React que permiten usar estado y otras
  características sin escribir clases. Los más comunes son useState y useEffect.

  useState nos permite manejar estado local, y useEffect manejar efectos
  secundarios como suscripciones o temporizadores.

  Este ejemplo muestra un reloj que se actualiza cada segundo usando useEffect.
  También puedes cambiar la zona horaria para ver la hora en diferentes regiones.
  */

  const [time, setTime] = useState(new Date());
  const [zona, setZona] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const horaFormateada = time.toLocaleTimeString('es-ES', { timeZone: zona });

  return (
    <div>
      <h1>Hooks en React</h1>
      <p>
        Los hooks permiten usar estado y otros mecanismos en componentes funcionales.
        useState maneja el estado, y useEffect controla efectos secundarios.
      </p>
      <p>
        En este reloj interactivo, el tiempo se actualiza cada segundo y puedes cambiar
        la zona horaria para ver la hora en distintas regiones.
      </p>

      <select onChange={e => setZona(e.target.value || undefined)} style={{ padding: 8, fontSize: 16 }}>
        {zonas.map(z => (
          <option key={z.label} value={z.value || ''}>
            {z.label}
          </option>
        ))}
      </select>

      <h2 style={{ marginTop: 20 }}>Hora actual: {horaFormateada}</h2>
    </div>
  );
};

export default HooksPage;
