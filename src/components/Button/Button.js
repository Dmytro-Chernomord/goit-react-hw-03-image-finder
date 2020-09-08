import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick} type="button">
      load more
    </button>
  );
};

export default Button;
