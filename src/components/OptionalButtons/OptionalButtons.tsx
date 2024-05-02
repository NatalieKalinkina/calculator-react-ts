import './OptionalButtons.css';
import { TextButton } from '../TextButton/TextButton';

export const OptionalButtons = ({ handleClick, handleDeleteClick, handlePercentClick }) => {
  return (
    <section className="optional-buttons">
      <TextButton value="AC" handleClick={handleDeleteClick} />
      <TextButton value="(&ensp;)" handleClick={handleClick} />
      <TextButton value="%" handleClick={handlePercentClick} />
    </section>
  );
};
