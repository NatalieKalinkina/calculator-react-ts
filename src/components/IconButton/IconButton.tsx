import './IconButton.css';

export const IconButton = ({ type }) => {
  return <button className={`button icon-button icon-button_type_${type}`}></button>;
};
