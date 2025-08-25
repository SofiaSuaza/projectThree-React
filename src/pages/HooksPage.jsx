import React, { useState, useEffect } from 'react';

const zonas = [
  { label: 'Zona Local (Sistema)', value: undefined },
  { label: 'UTC', value: 'UTC' },
  { label: 'New York (EST)', value: 'America/New_York' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
];

const HooksPage = () => {
  const [time, setTime] = useState(new Date());
  const [zona, setZona] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Formatear la hora con la zona horaria seleccionada
  const horaFormateada = time.toLocaleTimeString('es-ES', {
    timeZone: zona,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Encontrar el nombre de la zona seleccionada
  const zonaNombre =
    zonas.find((z) => z.value === zona)?.label || 'Zona Local (Sistema)';

  return (
    <div className="hooks-container">
      <div className="hooks-content">
        <h1 className="page-title">Hooks en React</h1>
        
        <img 
          src="https://www.aluracursos.com/blog/assets/react-hooks/img2.png" 
          alt="React Hooks Illustration" 
          className="hooks-image"
        />
        
        <div className="hooks-explanation">
          <p className="explanation-paragraph">
            Los hooks son funciones especiales que te permiten "conectarte" al estado de React y a las características del ciclo de vida desde componentes funcionales. Introdujeron una forma más limpia y directa de manejar la lógica de estado sin necesidad de componentes de clase. Los hooks siempre empiezan con la palabra "use" y permiten reutilizar lógica de estado entre diferentes componentes.
          </p>
          <p className="explanation-paragraph">
            <strong>useState</strong> es el hook más básico y fundamental. Te permite agregar estado local a componentes funcionales. Devuelve un par: el valor actual del estado y una función que te permite actualizarlo. Cada vez que llamas a la función de actualización, React re-renderiza el componente con el nuevo valor.
          </p>
          <p className="explanation-paragraph">
            <strong>useEffect</strong> te permite realizar efectos secundarios en componentes funcionales. Es como combinar componentDidMount, componentDidUpdate y componentWillUnmount en uno solo. Se ejecuta después de cada renderizado y puede limpiar recursos cuando el componente se desmonta. Puedes controlar cuándo se ejecuta pasando un array de dependencias como segundo parámetro.
          </p>
          <p className="explanation-paragraph">
            Los hooks ofrecen múltiples ventajas: permiten reutilizar lógica de estado entre componentes, simplifican el código al eliminar la necesidad de componentes de clase, facilitan la separación de preocupaciones en la lógica del componente, mejoran la legibilidad y mantenibilidad del código, y permiten crear hooks personalizados para lógica específica de tu aplicación.
          </p>
        </div>

        <div className="example-section">
          <p className="example-intro">
            En este reloj interactivo, el tiempo se actualiza cada segundo y puedes cambiar
            la zona horaria para ver la hora en distintas regiones.
          </p>

          <div className="clock-widget">
            <label htmlFor="zonaSelect" className="timezone-label">
              Selecciona una zona horaria:
            </label>
            <br />
            <select
              id="zonaSelect"
              onChange={(e) => setZona(e.target.value || undefined)}
              className="timezone-select"
            >
              {zonas.map((z) => (
                <option key={z.label} value={z.value || ''}>
                  {z.label}
                </option>
              ))}
            </select>

            <h2 className="current-zone">
              Hora actual en <em>{zonaNombre}</em>:
            </h2>
            <p className="time-value">{horaFormateada}</p>
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

export default HooksPage;