import styles from "./DeckList.module.css";

export default function DeckList({ cards }) {
  let cardsData = cards.data;
  console.log(cardsData[0].name);

  const cardList = cardsData.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });

  return <div className={styles.container}>{cardList}</div>;
}
