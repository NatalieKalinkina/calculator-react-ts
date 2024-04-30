import './CountButtons.css';
import { IconButton } from '../IconButton/IconButton';

export const CountButtons = () => {
  return (
    <section className="count-buttons">
      <IconButton type="plus" />
      <IconButton type="minus" />
      <IconButton type="multiplication" />
      <IconButton type="devision" />
      <IconButton type="total" />
    </section>
  );
};
