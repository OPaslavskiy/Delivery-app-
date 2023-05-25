import React, { useState } from "react";
import { Button } from "./Button.styled";

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
        <li key={button}>
          <Button
            onClick={() => {
              handleClick(index, button);
            }}
            disabled={activeButton !== null && activeButton !== index}
          >
            {`${button}`}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
