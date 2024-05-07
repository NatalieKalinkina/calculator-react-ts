import './ResultScreen.css';

type TProps = {
  task: string | number;
  result: string | number;
};

export const ResultScreen: React.FC<TProps> = ({ task, result }) => {
  return (
    <section className="result-screen">
      <p className="result-screen__task">{task}</p>
      <p className="result-screen__result">{result}</p>
    </section>
  );
};
