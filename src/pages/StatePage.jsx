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
    <div>
      <h1>Estados (State) en React</h1>
      <p>
        El estado local permite que un componente mantenga y actualice datos internos.
        Cada vez que el estado cambia, React vuelve a renderizar el componente para reflejar la nueva información.
      </p>
      <p>
        Este ejemplo es una lista de tareas simple que usa estado para:
        guardar las tareas, marcar completadas, filtrarlas y eliminarlas.
      </p>

      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Nueva tarea"
        style={{ padding: '8px', width: '300px' }}
      />
      <button onClick={addTask} style={{ marginLeft: 8, padding: '8px' }}>
        Añadir
      </button>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
          Todas
        </button>
        <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
          Pendientes
        </button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
          Completadas
        </button>
      </div>

      <ul style={{ marginTop: 20 }}>
        {filteredTasks.length === 0 && <li>No hay tareas</li>}
        {filteredTasks.map(task => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: 8 }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>
        <b>Total tareas:</b> {tasks.length} | <b>Completadas:</b> {tasks.filter(t => t.completed).length}
      </p>
    </div>
  );
};

export default StatePage;
