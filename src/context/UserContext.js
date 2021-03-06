import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [modal, setModal] = useState(false);
  const [token, setToken] = useState(undefined);

  const verifySession = () => {
    setUserName(localStorage.getItem("name"));
    if (!localStorage.getItem("name")) {
      setLogged(false);
      setUserName("");
    } else {
      setLogged(true);
    }
  };

  useEffect(() => {
    if (!token) {
      logOut();
    } else {
      verifySession();
    }
  }, [userName, logged, token]);

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
        setUser({
          name: user.data.firstName,
          userId: user.data.id,
          email: user.data.email,
        });
        localStorage.setItem("name", user.data.firstName);
        setToken(user.token);
        setLogged(true);
      })
      .catch((error) => console.log(error));
  };

  const userReg = (firstname, lastname, birthdate, city, email, password) => {
    fetch("https://movies-341014.ue.r.appspot.com/auth/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        birthdate: birthdate,
        city: city,
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
      });
    userVerify(email, password);
  };

  const logOut = () => {
    localStorage.removeItem("name");
    fetch("https://movies-341014.ue.r.appspot.com/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setLogged(false);
    setUser({});
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        userVerify,
        logged,
        setLogged,
        userName,
        userReg,
        logOut,
        modal,
        setModal,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserContext;
