import './CountButtons.css';
import { IconButton } from '../IconButton/IconButton';

export const CountButtons = ({ handleClick }) => {
  return (
    <section className="count-buttons">
      <IconButton action="plus" handleClick={handleClick} />
      <IconButton action="minus" handleClick={handleClick} />
      <IconButton action="multiplication" handleClick={handleClick} />
      <IconButton action="devision" handleClick={handleClick} />
      <IconButton action="total" handleClick={handleClick} />
    </section>
  );
};
