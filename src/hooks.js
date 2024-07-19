import { useState, useEffect } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
};

const useAxios = (url) => {
  const [cards, setCards] = useState([]);

  const addCard = async () => {
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export { useFlip, useAxios };
