import { FC } from 'react';
import './CountButtons.css';
import { IconButton } from '../IconButton/IconButton';

type TCountButtonsProps = {
  handlePlusClick: (value: string | number) => void
  handleMinusClick: (value: string | number) => void
  handleMultiClick: (value: string | number) => void
  handleTotalClick: (value: string | number) => void
  handleDevClick: (value: string | number) => void
};

export const CountButtons: FC<TCountButtonsProps> = ({handleTotalClick, handlePlusClick, handleMinusClick, handleMultiClick, handleDevClick}) => {
  return (
    <section className="count-buttons">
      <IconButton action="plus" handleClick={handlePlusClick} buttonValue="+" />
      <IconButton action="minus" handleClick={handleMinusClick} buttonValue="-" />
      <IconButton action="multiplication" handleClick={handleMultiClick} buttonValue="*" />
      <IconButton action="devision" handleClick={handleDevClick} buttonValue="/" />
      <IconButton action="total" handleClick={handleTotalClick} buttonValue="=" />
    </section>
  );
};
