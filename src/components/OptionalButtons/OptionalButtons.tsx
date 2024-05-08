import { FC } from 'react';
import './OptionalButtons.css';
import { TextButton } from '../TextButton/TextButton';

type TOptionalButtonsProps = {
  handleClick: (value: string | number) => void
  handleDeleteClick: (value: string | number) => void
  handlePercentClick: (value: string | number) => void
};

export const OptionalButtons: FC<TOptionalButtonsProps> = ({
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
