import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MyLoading from "@/components/MyLoading";
import { routes } from "@/routes";
import useAuthRoute from "@/hooks/useAuthRoute";
import { AuthStatus } from "@/context/Auth";

type ILoadable = {
  factory: () => Promise<{
    default: React.ComponentType<unknown>;
  }>;
  fallback?: React.ReactNode;
};

export const Loadable = ({ factory, fallback, ...rest }: ILoadable) => {
  const LazyComponent = lazy(factory);

  return (
    <Suspense fallback={fallback ?? <MyLoading />}>
      <LazyComponent {...rest} />
    </Suspense>
  );
};

const MyOutlet = ({
  status,
  condition,
  redirect,
}: {
  status: AuthStatus;
  condition: boolean;
  redirect: string;
}) =>
  status === AuthStatus.loading ? (
    <MyLoading />
  ) : condition ? (
    <Navigate
      to={{
        pathname: redirect,
      }}
      replace
    />
  ) : (
    <Outlet />
  );

export const PrivateRoute = () => {
  const { isLoggedIn = false, status } = useAuthRoute();
  return (
    <MyOutlet status={status} condition={!isLoggedIn} redirect={routes.login} />
  );
};

export const PublicRoute = () => {
  const { isLoggedIn = false, status } = useAuthRoute();
  return (
    <MyOutlet status={status} condition={isLoggedIn} redirect={routes.app} />
  );
};
