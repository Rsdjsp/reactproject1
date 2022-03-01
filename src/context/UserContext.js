import React, { createContext, useState } from "react";

export const userContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({});
  const[logged,setLogged] = useState(false)


  const userVerify = (email,password) => {
     fetch(" https://movies-341014.ue.r.appspot.com/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setUser({
          name: user.firstName,
          userId: user.id,
          email: user.email
        });
      })
      .catch((error) => console.log(error));
  }
  

  return (
    <userContext.Provider value={{ user, setUser, userVerify, logged, setLogged}}>
      {children}
    </userContext.Provider>
  );
}

export default UserContext;
