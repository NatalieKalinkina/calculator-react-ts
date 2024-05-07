import { FC, MouseEventHandler } from 'react';
import './OptionalButtons.css';
import { TextButton } from '../TextButton/TextButton';

type TProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  handleDeleteClick: MouseEventHandler<HTMLButtonElement>;
  handlePercentClick: MouseEventHandler<HTMLButtonElement>;
};

export const OptionalButtons: FC<TProps> = ({
  handleClick,
  handleDeleteClick,
  handlePercentClick
}) => {
  return (
    <section className="optional-buttons">
      <TextButton value="AC" handleClick={handleDeleteClick} />
      <TextButton value="(&ensp;)" handleClick={handleClick} />
      <TextButton value="%" handleClick={handlePercentClick} />
    </section>
  );
};
