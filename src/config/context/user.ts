import { createContext, Dispatch, SetStateAction } from "react";

export const defaultRound = {
  playerName: "",
  id: 0,
  questions: [
    {
      id: 0,
      description: "",
      options: [
        {
          id: 0,
          label: "",
        },
      ],
    },
  ],
};

interface IOption {
  id: number;
  label: string;
}

interface IQuestion {
  id: number;
  description: string;
  options: IOption[];
}

export interface IRound {
  round: {
    id: number;
    playerName: string;
    questions: IQuestion[];
  };
  setRound: Dispatch<SetStateAction<IRound["round"]>>;
}

export const UserContext = createContext<IRound>({
  round: defaultRound,
  setRound: () => {},
});
