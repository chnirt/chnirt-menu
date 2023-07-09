import { Button } from "@/components/ui/button";
import { AuthStatus } from "@/context/Auth";
import useAuth from "@/hooks/useAuth";
import { useCallback } from "react";

const App = () => {
  const { logout, setStatus } = useAuth();
  const handleLogout = useCallback(async () => {
    setStatus(AuthStatus.loading);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    logout();
    setStatus(AuthStatus.loaded);
  }, [logout, setStatus]);
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
