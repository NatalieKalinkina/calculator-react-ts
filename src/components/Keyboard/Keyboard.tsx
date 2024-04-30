import './Keyboard.css';
import { Numbers } from '../Numbers/Numbers';
import { CountButtons } from '../CountButtons/CountButtons';
import { OptionalButtons } from '../OptionalButtons/OptionalButtons';
import { TextButton } from '../TextButton/TextButton';
import { IconButton } from '../IconButton/IconButton';

export const Keyboard = () => {
  return (
    <section className="keyboard">
      <OptionalButtons />
      <CountButtons />
      <Numbers />
      <IconButton type="delete" />
      <TextButton text="." />
    </section>
  );
};
