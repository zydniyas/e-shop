import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

export const UserDataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
    accessToken: null,
    email: "",
    image: "",
  });

  console.log(userDetails);

  const handleLogin = () => {
    axios
      .post("https://dummyjson.com/user/login", {
        username: userDetails.userName,
        password: userDetails.password,
      })
      .then((response) => {
        console.log(response.data);
        setUserDetails({
          ...userDetails,
          accessToken: response.data.accessToken,
          email: response.data.email,
          image: response.data.image,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    console.log("hi");
  };

  const signOut = () => {
    setUserDetails({
      userName: "",
      password: "",
      accessToken: null,
      email: "",
      image: "",
    });
  };

  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, handleLogin, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
