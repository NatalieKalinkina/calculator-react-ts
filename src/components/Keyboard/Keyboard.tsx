import './Keyboard.css';
import { Numbers } from '../Numbers/Numbers';
import { CountButtons } from '../CountButtons/CountButtons';
import { OptionalButtons } from '../OptionalButtons/OptionalButtons';
import { TextButton } from '../TextButton/TextButton';
import { IconButton } from '../IconButton/IconButton';

export const Keyboard = ({ addValueToTask, deleteTask, addPercent }) => {
  return (
    <section className="keyboard">
      <OptionalButtons
        handleClick={addValueToTask}
        handleDeleteClick={deleteTask}
        handlePercentClick={addPercent}
      />
      <CountButtons
        handleClick={() => {
          console.log('button is clicked');
        }}
      />
      <Numbers handleClick={addValueToTask} />
      <div className="keyboard__bottom">
        <IconButton
          action="delete"
          handleClick={() => {
            console.log('button is clicked');
          }}
        />
        <TextButton value="." handleClick={addValueToTask} />
      </div>
    </section>
  );
};
