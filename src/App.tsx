import { useState } from 'react';

import './App.css';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { Keyboard } from './components/Keyboard/Keyboard';

function App() {
  const [task, setTask] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const addValueToTask = (value: string | number) => {
    setTask(task + String(value));
    if (task == '') {
      return
    } else {
      setResult(eval(task + String(value)))
    };
  }

  const deleteTask = () => {
    setTask('');
    setResult('');
  };

  const addPercent = () => {
    setTask(String(+task * 0.01));
    setResult(String(+task * 0.01));
  };

  const countTotal = () => {
    setTask(eval(task));
    setResult('');
  }

  return (
    <main className="app">
      <ResultScreen task={task} result={result} />
      <Keyboard addValueToTask={addValueToTask} deleteTask={deleteTask} addPercent={addPercent} countTotal={countTotal}/>
    </main>
  );
}

export default App;
