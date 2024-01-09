import { createContext, useContext, useEffect, useState } from "react";
import { checkData } from "../util/dataExpire";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = checkData("user-token");
    if (token) {
      setUser(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
