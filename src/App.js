
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
      title: 'Destroy the planet',
      id: crypto.randomUUID(),
      is_completed: false
    },
    {
      title: "Smell the flowers",
      id: crypto.randomUUID(),
      is_completed: true,

    },
    {
      title: 'another taskos',
      id: crypto.randomUUID(),
      is_completed: false

    }
  ]);
  return (
    <div className='wrapper w-[1300px] h-full flex flex-col '>
      < Header />
      < Hero completed__todos={0} total__todos={0} />
      < Form setTodos={setTodos} />
      < List todos={todos} />

    </div>
  );
}

export default App;
