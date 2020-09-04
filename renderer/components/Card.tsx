import React from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ItemTypes } from "./utils/constants";
import { XYCoord } from "dnd-core";

export interface CardProps {
  id: number;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const style = {
  border: "1px dotted gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "#000000",
  cursor: "move",
  borderRadius: "5px",
  color: "white",
};

const Card: React.FC<CardProps> = ({
  id,
  text,
  index,
  moveCard,
}: CardProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hovermIddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hovermIddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={{...style, opacity }}
    >
      {text}
    </div>
  );
};

export default Card;
