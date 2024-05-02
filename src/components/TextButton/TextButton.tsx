import './TextButton.css';

type TProps = {
  value: string | number;
  addValueToTask: string | number;
};

export const TextButton: React.FC<TProps> = ({ value, handleClick }) => {
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
