import './App.css';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { Keyboard } from './components/Keyboard/Keyboard';

function App() {
  return (
    <main className="app">
      <ResultScreen />
      <Keyboard />
    </main>
  );
}

export default App;
