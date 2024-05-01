import './IconButton.css';

export const IconButton = ({ type }) => {
  return (
    <button
      className="button icon-button"
      id={`icon-button_type_${type}`}
      onClick={() => console.log({ type })}
    ></button>
  );
};
