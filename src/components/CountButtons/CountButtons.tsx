import './CountButtons.css';

export const CountButtons = () => {
  return (
    <section className="count-buttons">
      <button className="count-button count-button_type_plus" value="+"></button>
      <button className="count-button count-button_type_minus" value="-"></button>
      <button className="count-button count-button_type_multiplication" value="*"></button>
      <button className="count-button count-button_type_devision" value="/"></button>
    </section>
  );
};
