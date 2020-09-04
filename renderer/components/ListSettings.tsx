import React from "react";
import Card from "./Card";
import update from "immutability-helper";
import { ISettings, settingsArr } from "./utils/constants";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// export interface Item {
//   id: number;
//   text: string;
// }

// export interface ContainerState {
//   cards: Item[];
// }

const ListSettings: React.FC = () => {
  const [cards, setCards] = React.useState<ISettings[]>(settingsArr);
  const moveCard = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const renderCard = (card: { id: number; text: string }, index: number) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="main-list">{cards.map((card, i) => renderCard(card, i))}</div>
      </DndProvider>
    </>
  );
};

export default ListSettings;
