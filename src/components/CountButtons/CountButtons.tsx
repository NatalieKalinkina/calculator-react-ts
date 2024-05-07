import { FC, MouseEventHandler } from 'react';
import './CountButtons.css';
import { IconButton } from '../IconButton/IconButton';

export const CountButtons: FC<{ handleClick: MouseEventHandler<HTMLButtonElement>, handleTotalClick: MouseEventHandler<HTMLButtonElement>}> = ({
  handleClick, handleTotalClick
}) => {
  return (
    <section className="count-buttons">
      <IconButton action="plus" handleClick={handleClick} buttonValue="+" />
      <IconButton action="minus" handleClick={handleClick} buttonValue="-" />
      <IconButton action="multiplication" handleClick={handleClick} buttonValue="*" />
      <IconButton action="devision" handleClick={handleClick} buttonValue="/" />
      <IconButton action="total" handleClick={handleTotalClick} buttonValue="=" />
    </section>
  );
};
