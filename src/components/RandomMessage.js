import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRainbow,
  faMeteor,
  faSunPlantWilt,
  faTornado,
  faHouseTsunami,
  faSnowman,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

const funMessages = [
  {
    text: "If you see a rainbow, look for the gold pot also",
    icon: (
      <FontAwesomeIcon
        icon={faRainbow}
        style={{ color: "plum", fontSize: "50px" }}
      />
    ),
  },
  {
    text: "Today's chances of being hit by a meteor are 0.00000001%. You really wanna take the risk? ",
    icon: (
      <FontAwesomeIcon
        icon={faMeteor}
        style={{ color: "brown", fontSize: "50px" }}
      />
    ),
  },
  {
    text: "Don't forget to water the plant ",
    icon: (
      <FontAwesomeIcon
        icon={faSunPlantWilt}
        style={{ color: "green", fontSize: "50px" }}
      />
    ),
  },
  {
    text: "If you see this thing coming to you you're heading in the wrong direction   ",
    icon: (
      <FontAwesomeIcon
        icon={faTornado}
        style={{ color: "gray", fontSize: "50px" }}
      />
    ),
  },
  {
    text: "And you were thinking to get a house on the beach, huh ?    ",
    icon: (
      <FontAwesomeIcon
        icon={faHouseTsunami}
        style={{ color: "lightblue", fontSize: "50px" }}
      />
    ),
  },
  {
    text: "This is you if you don`t get dress    ",
    icon: (
      <FontAwesomeIcon
        icon={faSnowman}
        style={{ color: "lightblue", fontSize: "50px" }}
      />
    ),
  },
];

export default function RandomMessage({ cityName }) {
  const [index, setIndex] = useState(0);

  function randomIndex(length) {
    setIndex(Math.floor(Math.random() * length));
  }

  useEffect(() => {
    randomIndex(funMessages.length);
  }, [cityName]);

  return (
    <div className="RandomMessage">
      <h2>Today's wisdom is: </h2>
      <p>{funMessages[index].text} </p>
      <p>{funMessages[index].icon} </p>
    </div>
  );
}
