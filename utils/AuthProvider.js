import React, { useState, createContext } from "react";
import { AsyncStorage } from "react-native";

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authContext = React.useMemo(
    () => ({
      user,
      login: async (data) => {
        setUser(data);
        AsyncStorage.setItem("user", JSON.stringify(data));
        console.log("finished setting user");
      },
      logout: () => {
        setUser(null);
        AsyncStorage.removeItem("user");
        console.log("logged out");
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
