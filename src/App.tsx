import { useState } from 'react';

import './App.css';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { Keyboard } from './components/Keyboard/Keyboard';

function App() {
  const [task, setTask] = useState('1+2');
  const [result, setResult] = useState('3');

  const addValueToTask = value => {
    setTask(value);
    setResult(value);
  };

  const deleteTask = () => {
    setTask('');
    setResult('');
  };

  const addPercent = () => {
    setTask(+task * 0.01);
    setResult(+task * 0.01);
  };

  return (
    <main className="app">
      <ResultScreen task={task} result={result} />
      <Keyboard addValueToTask={addValueToTask} deleteTask={deleteTask} addPercent={addPercent} />
    </main>
  );
}

export default App;
