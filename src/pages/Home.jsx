const Home = () => (
  <div className="home-container">
    <h1 className="main-title">Conceptos Fundamentales de React</h1>
    
    <p className="hero-description">
      Este proyecto presenta los conceptos fundamentales de React de forma práctica 
      y ejemplificada. Cada página está enfocada en un concepto específico con 
      definiciones claras, imágenes ilustrativas y bloques de código práctico.
    </p>
    <img 
      src="https://reactjs.org/logo-og.png" 
      alt="React Logo" 
      width="300" 
      className="react-logo" 
    />
    
    <div className="content-section">
      <p className="content-description">
        El proyecto está dividido en varias páginas que cubren desde los conceptos básicos 
        hasta técnicas avanzadas de React, incluyendo componentes funcionales, manejo de 
        estado, hooks y gestión global con Redux. Cada página incluye ejemplos prácticos 
        implementados con componentes de React.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3 className="feature-title">Props</h3>
          <p className="feature-text">
            Aprende cómo pasar información entre componentes usando propiedades.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3 className="feature-title">Estado</h3>
          <p className="feature-text">
            Manejo de estados locales y su actualización en componentes React.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3 className="feature-title">Ciclo de Vida</h3>
          <p className="feature-text">
            Comprende las fases de los componentes y su equivalente en hooks.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🪝</div>
          <h3 className="feature-title">Hooks</h3>
          <p className="feature-text">
            Explora useState, useEffect, useContext y otros hooks esenciales.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3 className="feature-title">Virtual DOM</h3>
          <p className="feature-text">
            Descubre cómo funciona y sus ventajas frente al DOM tradicional.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🗂️</div>
          <h3 className="feature-title">Redux</h3>
          <p className="feature-text">
            Gestión de estado global con store, actions y reducers.
          </p>
        </div>
      </div>
    </div>

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

export default Home;