import { useState } from 'react';

import './App.css';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { Keyboard } from './components/Keyboard/Keyboard';

function App() {
  const [task, setTask] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const addValueToTask = (value: string | number) => {
    setTask(task + String(value));
    // if (task == '') {
    //   return
    // } else {
      // setResult(String(+eval(task + String(value)).toFixed(8)));
    // };
  }

  const deleteTask = () => {
    setTask('');
    setResult('');
  };

  const addPercent = (value: string | number) => {
    setTask(task + String(value));
    console.log(String(task))
    // if (task == '') {
    //   return
    // } else {
    //   setResult(eval(String(+task/100)))
    // };
  };

  const countTotal = () => {
    setTask(eval(result));
    setResult('');
  }

  const deleteLastSymbol = () => {
    setTask(task.slice(0,-1));
    if (result == '') {
      return
    } else {
      setResult(String(+eval(task.slice(0,-1)).toFixed(8)))
    };
  }

  return (
    <main className="app">
      <ResultScreen task={task} result={result} />
      <Keyboard addValueToTask={addValueToTask} deleteTask={deleteTask} addPercent={addPercent} countTotal={countTotal} deleteLastSymbol={deleteLastSymbol} addPlusToTask={addValueToTask} addMinusToTask={addValueToTask} addMultiToTask={addValueToTask} addDevToTask={addValueToTask}/>
    </main>
  );
}

export default App;
