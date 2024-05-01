import './Numbers.css';
import { TextButton } from '../TextButton/TextButton';

export const Numbers = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => {
    return <TextButton text={num} key={num} />;
  });

  return <section className="nums"> {nums} </section>;
};
