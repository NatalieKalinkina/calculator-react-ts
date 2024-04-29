import './Keyboard.css';
import { Numbers } from '../Numbers/Numbers';
import { CountButtons } from '../CountButtons/CountButtons';
import { OptionalButtons } from '../OptionalButtons/OptionalButtons';

export const Keyboard = () => {
  return (
    <>
      <OptionalButtons />
      <Numbers />
      <CountButtons />
    </>
  );
};
