import { FC, MouseEventHandler } from 'react';
import './IconButton.css';

type TProps = {
  action: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  buttonValue: string;
};

export const IconButton: FC<TProps> = ({ action, handleClick, buttonValue }) => {
  const onHandleClick = () => {
    handleClick(buttonValue);
  };

  return (
    <button
      type="button"
      className="button icon-button"
      id={`icon-button_type_${action}`}
      onClick={onHandleClick}
      value={buttonValue}
    ></button>
  );
};
