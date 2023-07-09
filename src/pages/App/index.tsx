import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const App = () => {
  const { logout } = useAuth();
  const handleLogout = useCallback(() => {
    const logoutFromAPI = async () => {
      const data: boolean = await new Promise((resolve) =>
        setTimeout(() => resolve(true), 1000)
      );
      return data;
    };
    logout(logoutFromAPI);
  }, [logout]);
  return (
    <div>
      App
      <Button type="button" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default App;
