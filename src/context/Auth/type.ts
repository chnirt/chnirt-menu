import { AuthStatus } from ".";

export type AuthContextType = {
  user: AuthUser | null;
  status: AuthStatus;
  isLoggedIn: boolean;
  login: ({ username }: { username: string }) => boolean;
  logout: () => boolean;
  setStatus: (value: React.SetStateAction<AuthStatus>) => void;
};

export type AuthUser = {
  username: string;
};
