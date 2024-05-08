import { FC } from 'react';
import './Keyboard.css';
import { Numbers } from '../Numbers/Numbers';
import { CountButtons } from '../CountButtons/CountButtons';
import { OptionalButtons } from '../OptionalButtons/OptionalButtons';
import { TextButton } from '../TextButton/TextButton';
import { IconButton } from '../IconButton/IconButton';

type TKeyboardProps = {
  addValueToTask: (value: string | number) => void
  addPlusToTask: (value: string | number) => void
  addMinusToTask: (value: string | number) => void
  addMultiToTask: (value: string | number) => void
  addDevToTask: (value: string | number) => void
  deleteTask: (value: string | number) => void
  addPercent: (value: string | number) => void
  countTotal: (value: string | number) => void
  deleteLastSymbol: (value: string | number) => void
};

export const Keyboard:FC<TKeyboardProps> = ({ addValueToTask, deleteTask, addPercent, countTotal, deleteLastSymbol, addPlusToTask, addMinusToTask, addMultiToTask, addDevToTask }) => {
  return (
    <section className="keyboard">
      <OptionalButtons
        handleClick={addValueToTask}
        handleDeleteClick={deleteTask}
        handlePercentClick={addPercent}
      />
      <CountButtons handleTotalClick={countTotal} handlePlusClick={addPlusToTask} handleMinusClick={addMinusToTask} handleMultiClick={addMultiToTask} handleDevClick={addDevToTask}/>
      <Numbers handleClick={addValueToTask} />
      <div className="keyboard__bottom">
        <IconButton
          action="delete"
          handleClick={deleteLastSymbol}
          buttonValue='delete'
        />
        <TextButton value="." handleClick={addValueToTask} />
      </div>
    </section>
  );
};
