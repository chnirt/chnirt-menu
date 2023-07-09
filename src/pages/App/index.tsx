import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { routes } from "@/routes";

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
      <Link to={routes.styleGuide}>
        <Button className="p-0" type="button" variant="link">
          Style Guide
        </Button>
      </Link>
    </div>
  );
};

export default App;
