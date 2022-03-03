import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);

  const verifySession = () => {
    if (!localStorage.getItem("name")) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  };

  useEffect(() => {
    verifySession()
  }, []);

  const userVerify = (email, password) => {
    fetch(" https://movies-341014.ue.r.appspot.com/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setUser({
          name: user.data.firstName,
          userId: user.data.id,
          email: user.data.email,
        });
        localStorage.setItem("name", user.data.firstName);
        setLogged(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <userContext.Provider
      value={{ user, setUser, userVerify, logged, setLogged }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserContext;
