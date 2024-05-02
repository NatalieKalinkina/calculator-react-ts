import './IconButton.css';

type TProps = {
  action: string;
};

export const IconButton: React.FC<TProps> = ({ action, handleClick }) => {
  return (
    <button
      type="button"
      className="button icon-button"
      id={`icon-button_type_${action}`}
      onClick={handleClick}
    ></button>
  );
};
