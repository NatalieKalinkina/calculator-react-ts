import './OptionalButtons.css';
import { TextButton } from '../TextButton/TextButton';

export const OptionalButtons = () => {
  return (
    <section className="optional-buttons">
      <TextButton text="AC" />
      <TextButton text="( )" />
      <TextButton text="%" />
    </section>
  );
};
