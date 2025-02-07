import { userCard } from "./userCard.js";

export const generateUsersCards = (userArray) => {
  const cards = userArray.map((user) => userCard(user));
  return cards.join("");
};
