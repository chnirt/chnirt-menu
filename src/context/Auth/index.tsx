import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "react-use";
import { AuthContextType, AuthUser } from "./type";

export enum AuthStatus {
  loading = "loading",
  loaded = "loaded",
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  status: AuthStatus.loading,
  isLoggedIn: false,
  login: () => true,
  logout: () => true,
  setStatus: () => {
    return;
  },
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.loading);
  const [accessToken, setAccessToken, removeAccessToken] =
    useLocalStorage("accessToken");
  const isLoggedIn = useMemo(() => !!user, [user]);
  const login = useCallback(
    ({ username }: { username: string }) => {
      // setStatus(AuthStatus.loading);
      setAccessToken(username);
      setUser({
        username,
      });
      // setTimeout(() => {
      //   setStatus(AuthStatus.loaded);
      // }, 1000);
      return true;
    },
    [setAccessToken]
  );
  const logout = useCallback(() => {
    // setStatus(AuthStatus.loading);
    removeAccessToken();
    setUser(null);
    // setTimeout(() => {
    //   setStatus(AuthStatus.loaded);
    // }, 1000);
    return true;
  }, [removeAccessToken]);

  useEffect(() => {
    if (accessToken) {
      String(accessToken).split("@");
      setUser({
        username: String(accessToken).split("@")[0],
      });
    }
    setTimeout(() => {
      setStatus(AuthStatus.loaded);
    }, 1000);
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        isLoggedIn,
        login,
        logout,
        setStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
