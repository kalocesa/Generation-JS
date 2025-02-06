import { userCard } from "./userCard";

export const generateUsersCards = (userArray) => {
  const cards = userArray.map((user) => userCard(user));
  return cards.join("");
};
