import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "chnirt",
      password: "admin",
    },
  });
  const { login } = useAuth();
  const onSubmit: SubmitHandler<Inputs> = ({ username }) => {
    const loginFromAPI = async () => {
      const data: { username: string } = await new Promise((resolve) =>
        setTimeout(() => resolve({ username }), 1000)
      );
      return data;
    };
    login(loginFromAPI);
  };
  // console.log(errors);
  return (
    <div className="px-5">
      <div className="flex flex-col h-screen justify-center">
        <h1>Login</h1>
        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            // name="username"
            autoComplete="username"
            placeholder="Username"
            {...register("username")}
          />
          <Input
            // name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            {...register("password")}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
