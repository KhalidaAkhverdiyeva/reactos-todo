
'use client';
import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import List from './components/List'
import './index.scss'
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([
    {
      title: 'bezi seyler',
      id: crypto.randomUUID,
      is_completed: true,
    }
  ]);
  const completed__todos = todos.filter((task) => task.is_completed === true).length;
  const total__todos = todos.length;

  const updateTodo = (id, isCompleted) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, is_completed: isCompleted } : todo
    ));
  };
  return (
    <div className='wrapper w-[1300px] h-full flex flex-col '>
      < Header />
      < Hero completed__todos={completed__todos} total__todos={total__todos} />
      < Form setTodos={setTodos} />
      < List todos={todos} updateTodo={updateTodo} />

    </div>
  );
}

export default App;
