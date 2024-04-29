import './Numbers.css';

export const Numbers = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => {
    return (
      <button className="nums__item" key={num}>
        {num}
      </button>
    );
  });

  return <div className="nums"> {nums} </div>;
};
