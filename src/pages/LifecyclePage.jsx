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

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => setLoading(false), 4000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div>
      <h1>Ciclo de Vida de un Componente</h1>
      <p>
        El ciclo de vida representa las fases de montaje, actualización y desmontaje.
        En componentes funcionales usamos useEffect para manejar estos eventos.
      </p>
      <p>
        En este ejemplo, al iniciar la carga, se simula una espera de 4 segundos.
        Si cancelas la carga, el timer se limpia para evitar efectos secundarios.
      </p>

      <button onClick={() => setLoading(!loading)} style={{ padding: '8px 16px' }}>
        {loading ? 'Cancelar Carga' : 'Iniciar Carga'}
      </button>

      <div style={{ marginTop: 20 }}>
        {loading ? <p>Cargando datos... ⏳</p> : <p>Datos cargados correctamente! ✅</p>}
      </div>
    </div>
  );
};

export default LifecyclePage;
