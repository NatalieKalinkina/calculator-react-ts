import { FC, MouseEvent} from 'react';
import './TextButton.css';

type TTextButtonProps = {
  value: number | string;
  handleClick: (value: string | number) => void;
};

export const TextButton: FC<TTextButtonProps> = ({ value, handleClick }) => {
  const onHandleClick = (e:MouseEvent<HTMLButtonElement>) => {
    handleClick((e.target as HTMLButtonElement).value)
  };


  return (
    <button
      type="button"
      className="button text-button"
      id={value == '0' ? `text-button_type_0` : ''}
      onClick={onHandleClick}
      value={value}
    >
      {value}
    </button>
  );
};