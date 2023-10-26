import './App.css';

import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons';

const API = 'http://localhost:5000';

function App() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmint = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };
    console.log(todo);

    setTitle('');
    setTime('');
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira a sua próxima Tarefa:</h2>
        <form onSubmit={handleSubmint}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ''}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração</label>
            <input
              type="text"
              name="time"
              placeholder="Tempo Estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={title || ''}
              required
            />
          </div>
          <input type="submit" value="Criar tarefa" />
        </form>
      </div>
      <div className="list-todo">
        <h2>Lista de Tarefas:</h2>
        {todos.length === 0 && <p> Não há Tarefas!!</p>}
      </div>
    </div>
  );
}

export default App;
