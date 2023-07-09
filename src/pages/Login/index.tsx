import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { routes } from "@/routes";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z
    .string()
    .min(3, {
      message: "Password must be at least 3 characters.",
    })
    .max(30, {
      message: "Password must not be longer than 30 characters.",
    }),
});

type AccountFormValues = z.infer<typeof loginFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  email: "chnirt@gmail.com",
  password: "admin",
};

const Login = () => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });
  const navigation = useNavigate();
  const { login } = useAuth();

  function onSubmit(values: AccountFormValues) {
    const loginFromAPI = async () => {
      const data: { username: string } = await new Promise((resolve) =>
        setTimeout(() => resolve({ username: values.email }), 1000)
      );
      return data;
    };
    return login(loginFromAPI);
  }

  return (
    <div>
      <div className="sticky top-0 h-12 flex items-center justify-between">
        <div className="flex flex-1 justify-start items-center mr-4">
          <Link to={routes.register}>
            <Button
              className="border-transparent hover:bg-transparent"
              variant="outline"
              size="icon"
              type="button"
              onClick={() => navigation(-1)}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        <div className="grow flex justify-center px-3">
          <h2 className="m-0 py-3">Login</h2>
        </div>
        <div className="flex flex-1 justify-end items-center ml-4"></div>
      </div>
      <div className="mt-5 px-5 flex flex-col">
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-xl"
                      autoComplete="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-xl"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="rounded-xl w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <div className="mt-5 flex justify-center">
          <Link to={routes.forgotPassword}>
            <Button className="p-0" type="button" variant="link">
              Forgot password?
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
