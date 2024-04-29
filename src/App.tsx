import './App.css';
import { ResultScreen } from './components/ResultScreen/ResultScreen';
import { Numbers } from './components/Numbers/Numbers';

function App() {
  return (
    <main className="app">
      <ResultScreen />
      <Numbers />
    </main>
  );
}

export default App;
