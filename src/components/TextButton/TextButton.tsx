import { FC, MouseEventHandler } from 'react';
import './TextButton.css';

type TProps = {
  value: string | number;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export const TextButton: FC<TProps> = ({ value, handleClick }) => {
  const onHandleClick = () => {
    handleClick(value);
  };

  return (
    <button
      type="button"
      className="button text-button"
      id={value == '0' ? `text-button_type_0` : ''}
      onClick={onHandleClick}
    >
      {value}
    </button>
  );
};
