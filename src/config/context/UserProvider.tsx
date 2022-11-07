import { useState } from "react";
import { defaultRound, IRound, UserContext } from "./user";

export const UserProvider = ({ children }: any) => {
  const [round, setRound] = useState<IRound["round"]>(defaultRound);

  return (
    <UserContext.Provider value={{ round, setRound }}>
      {children}
    </UserContext.Provider>
  );
};
