export interface ISettings {
  id: number;
  text: string;
}

enum ItemTypes {
  CARD = "card",
}

const settingsArr: ISettings[] = [
  {
    id: 1,
    text: "Task 1",
  },
  {
    id: 2,
    text: "Task 2",
  },
  {
    id: 3,
    text: "Task 3",
  },
  {
    id: 4,
    text: "Task 4",
  },
  {
    id: 5,
    text: "Task 5",
  },
  {
    id: 6,
    text: "Task 6",
  },
  {
    id: 7,
    text: "Task 7",
  },
  {
    id: 8,
    text: "Task 8",
  },
  {
    id: 9,
    text: "Task 9",
  },
  {
    id: 10,
    text: "Task 10",
  },
  {
    id: 11,
    text: "Task 11",
  },
  {
    id: 12,
    text: "Task 12",
  },
  {
    id: 13,
    text: "Task 13",
  },
];
export { settingsArr, ItemTypes };
