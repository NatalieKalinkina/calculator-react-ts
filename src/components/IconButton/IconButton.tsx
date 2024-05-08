import { FC, MouseEvent } from 'react';
import './IconButton.css';

type TIconButtonProps = {
  action: string;
  buttonValue: string;
  handleClick: (value: string | number) => void
};

export const IconButton: FC<TIconButtonProps> = ({ action, handleClick, buttonValue }) => {
  const onHandleClick = (e:MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLButtonElement).value)
    handleClick((e.target as HTMLButtonElement).value)
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
