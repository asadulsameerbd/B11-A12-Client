import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "asad@gmail.com" });

  const authInfo = {
    user,
    setUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
