import React, { useState, useEffect } from 'react';

const LifecyclePage = () => {
  /*
  El ciclo de vida de un componente describe las diferentes fases por las que pasa
  un componente desde que se monta, actualiza hasta que se desmonta.

  En componentes funcionales, estos ciclos se manejan con el hook useEffect,
  que permite ejecutar código cuando el componente se monta, se actualiza o se desmonta.

  En este ejemplo, simulamos una carga de datos con un temporizador. Mientras
  se "carga", se muestra un mensaje de espera. Al desmontar el componente, el timer se limpia.
  */

  const [loading, setLoading] = useState(false);
  const [loadCompleted, setLoadCompleted] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
        setLoadCompleted(true);
      }, 4000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [loading]);

  const handleToggleLoading = () => {
    if (loading) {
      // Si está cargando y cancelo, limpio todo
      setLoading(false);
      setLoadCompleted(false);
    } else {
      // Si inicio carga, reseteo el estado completado
      setLoadCompleted(false);
      setLoading(true);
    }
  };

  return (
    <div className="lifecycle-container">
      <div className="lifecycle-content">
        <h1 className="page-title">Ciclo de Vida de un Componente</h1>
        
        {/* Espacio para imagen */}
        <img 
          src="https://miro.medium.com/0*4IQtkNYAiXaCDXeP.jpg" 
          alt="Ciclo de vida de componentes React" 
          className="lifecycle-image"
        />

        <div className="lifecycle-explanation">
          <p className="explanation-paragraph">
            El ciclo de vida representa las fases de montaje, actualización y desmontaje.
            En componentes funcionales usamos useEffect para manejar estos eventos.
          </p>

          <h2>Las Tres Fases</h2>
          <p className="explanation-paragraph"><strong>1. Montaje:</strong> Cuando el componente se crea e inserta en el DOM. Ideal para configuraciones iniciales.</p>
          <p className="explanation-paragraph"><strong>2. Actualización:</strong> Se ejecuta cuando props o state cambian. Permite reaccionar a cambios de datos.</p>
          <p className="explanation-paragraph"><strong>3. Desmontaje:</strong> Antes de eliminar el componente del DOM. Crucial para limpiar recursos.</p>

          <h2>Componentes de Clase vs Funcionales</h2>
          <p className="explanation-paragraph"><strong>Clase:</strong> componentDidMount, componentDidUpdate, componentWillUnmount</p>
          <p className="explanation-paragraph"><strong>Funcional:</strong> useEffect con diferentes arrays de dependencias</p>
        </div>

        <div className="example-section">
          <p className="example-intro">
            En este ejemplo, al iniciar la carga, se simula una espera de 4 segundos.
            Si cancelas la carga, el timer se limpia para evitar efectos secundarios.
          </p>

          <div className="loading-widget">
            <button onClick={handleToggleLoading} className="load-button">
              {loading ? 'Cancelar Carga' : 'Iniciar Carga'}
            </button>

            <div className="loading-status">
              {loading ? (
                <p>Cargando datos... ⏳</p>
              ) : loadCompleted ? (
                <p>Datos cargados correctamente! ✅</p>
              ) : (
                <p>Listo para cargar datos 📋</p>
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

export default LifecyclePage;