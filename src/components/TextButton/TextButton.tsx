import './TextButton.css';

export const TextButton = ({ text }) => {
  return (
    <button
      className="button text-button"
      id={text == '0' ? `text-button_type_0` : ''}
      onClick={() => console.log({ text })}
    >
      {text}
    </button>
  );
};
