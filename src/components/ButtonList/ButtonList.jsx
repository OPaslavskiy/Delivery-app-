import React, { useState } from "react";

const ButtonList = ({ loadGoods }) => {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = ["mcduck", "theshaurma", "elari", "faina", "sushiabw"];

  const handleClick = (index, button) => {
    loadGoods(button);
    setActiveButton(index);
  };

  return (
    <ul>
      {buttons.map((button, index) => (
        <li>
          <button
            key={index}
            onClick={() => {
              handleClick(index, button);
            }}
            disabled={activeButton !== null && activeButton !== index}
          >
            {`${button}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
