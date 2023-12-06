import { createContext, useContext, useEffect, useState } from "react";
import { getAuthState } from "../api/firebase";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    /* if (!user?.isJoin) {
      window.alert("추가 정보를 입력 후 이용해주세요.");
      window.location = "/member?social=true";
      return;
    } */
    getAuthState(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
