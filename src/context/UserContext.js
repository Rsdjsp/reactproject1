import React, { createContext, useState } from "react";

export const userContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContext;
