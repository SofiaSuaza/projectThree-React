import React, { useState } from 'react';

const StatePage = () => {
  /*
  El estado (*state*) en React permite a los componentes guardar y manejar datos
  que pueden cambiar con el tiempo. A diferencia de las props, el estado es
  mutable y local al componente, y cada vez que se actualiza, React vuelve a
  renderizar el componente para reflejar esos cambios en la UI.

  En este ejemplo interactivo, implementamos una lista de tareas donde puedes:
  - Añadir nuevas tareas
  - Marcar tareas como completadas o pendientes
  - Filtrar la lista según su estado
  - Eliminar tareas
  El manejo de estas funcionalidades se hace usando el estado local del componente.
  */

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const addTask = () => {
    if (taskText.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: taskText.trim(), completed: false }]);
    setTaskText('');
  };

  const toggleTask = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="state-container">
      <div className="state-content">
        <h1 className="page-title">Estados (State) en React</h1>
        
        <img 
          src="https://blog.solguruz.com/wp-content/uploads/2023/11/Understanding-State-Management-in-React-From-Confusion-to-Clarity.png" 
          alt="React State Illustration" 
          className="state-image"
        />
        
        <div className="state-explanation">
          <p className="explanation-paragraph">
            El estado (state) en React es una característica fundamental que permite a los componentes mantener y administrar datos que pueden cambiar con el tiempo. A diferencia de las props, que son inmutables y se pasan desde componentes padre, el estado es completamente controlado por el componente que lo define y puede modificarse a lo largo del ciclo de vida del componente.
          </p>
          <p className="explanation-paragraph">
            <strong>¿Cómo funciona el estado?</strong> Cuando el estado de un componente cambia, React automáticamente vuelve a renderizar ese componente y todos sus componentes hijos para reflejar los nuevos datos en la interfaz de usuario. Este proceso se conoce como "re-renderizado" y es la base de la reactividad en React.
          </p>
          <p className="explanation-paragraph">
            <strong>El hook useState</strong> es la forma moderna de manejar estado en componentes funcionales. Acepta un valor inicial y devuelve un array con dos elementos: el valor actual del estado y una función para actualizarlo. La función de actualización puede recibir un nuevo valor directamente o una función que toma el estado anterior y devuelve el nuevo estado.
          </p>
          <p className="explanation-paragraph">
            <strong>Inmutabilidad:</strong> Es crucial entender que en React, el estado debe tratarse como inmutable. Esto significa que no debes modificar directamente los objetos o arrays del estado, sino crear nuevas copias con los cambios necesarios. Esta práctica permite a React detectar cambios de manera eficiente y optimizar el rendimiento del renderizado.
          </p>
          <p className="explanation-paragraph">
            <strong>Gestión de estado complejo:</strong> Para aplicaciones más grandes, el estado local puede volverse insuficiente. En estos casos, se utilizan patrones como el contexto de React, bibliotecas de gestión de estado como Redux o Zustand, o se implementan arquitecturas más sofisticadas para manejar el estado global de la aplicación de manera escalable.
          </p>
        </div>

        <div className="example-section">
          <p className="example-intro">
            Este ejemplo es una lista de tareas simple que usa estado para:
            guardar las tareas, marcar completadas, filtrarlas y eliminarlas.
          </p>

          <div className="task-manager">
            <div className="input-section">
              <input
                type="text"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
                placeholder="Nueva tarea"
                className="task-input"
              />
              <button onClick={addTask} className="add-button">
                Añadir
              </button>
            </div>

            <div className="filter-section">
              <button 
                onClick={() => setFilter('all')} 
                disabled={filter === 'all'}
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              >
                Todas
              </button>
              <button 
                onClick={() => setFilter('active')} 
                disabled={filter === 'active'}
                className={`filter-button ${filter === 'active' ? 'active' : ''}`}
              >
                Pendientes
              </button>
              <button 
                onClick={() => setFilter('completed')} 
                disabled={filter === 'completed'}
                className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
              >
                Completadas
              </button>
            </div>

            <ul className="task-list">
              {filteredTasks.length === 0 && <li className="no-tasks">No hay tareas</li>}
              {filteredTasks.map(task => (
                <li key={task.id} className="task-item">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="task-checkbox"
                  />
                  <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                    {task.text}
                  </span>
                  <button onClick={() => deleteTask(task.id)} className="delete-button">
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="task-stats">
              <span className="stat-item">
                <strong>Total tareas:</strong> {tasks.length}
              </span>
              <span className="stat-divider">|</span>
              <span className="stat-item">
                <strong>Completadas:</strong> {tasks.filter(t => t.completed).length}
              </span>
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

export default StatePage;