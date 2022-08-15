import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Admin } from "../../../components/Admin";
import { useAdminContext } from "../../../components/Admin/context";
import { AdminButton } from "../../../components/AdminLayout/AdminButton";

type Inputs = {
  username: string;
  password: string;
};

const LoginContent = () => {
  const [invalidAuth, setInvalidAuth] = useState(false);
  const { token, setToken } = useAdminContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (token) {
      router.push("/admin/settings");
    }
  }, [token]);

  const onSubmitLogin: SubmitHandler<Inputs> = async ({
    username,
    password,
  }) => {
    const response = await fetch("/api/merchant/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      setInvalidAuth(true);
      return;
    }

    setInvalidAuth(false);
    const authResponse = await response.json();

    if (!authResponse.accessToken) {
      console.error("There is an issue retrieving accessToken");
    }

    setToken(authResponse.accessToken);
    localStorage.setItem("accessToken", authResponse.accessToken);
  };

  return (
    <main className="h-full w-full text-center text-white flex flex-col justify-center items-center">
      <div className="bg-gray-700 p-4 rounded-md">
        <h1 className="text-4xl pb-10">Login Page</h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <label htmlFor="username">Username</label>
          <input
            className="text-black h-10"
            {...register("username")}
            placeholder="Username"
            required
          />
          <div className="h-4">
            {errors.username && <span>Username is required</span>}
          </div>
          <label htmlFor="password">Password</label>
          <input
            className="text-black h-10"
            {...register("password")}
            type="password"
            placeholder="Password"
            required
          />
          <div className="h-4">
            {errors.username && <span>Password is required</span>}
          </div>
          <AdminButton>Login</AdminButton>
          <div className="h-4">
            {invalidAuth && <span>User or Password is invalid</span>}
          </div>
        </form>
      </div>
    </main>
  );
};

const Login = () => (
  <Admin title="Merchant - Login Page">
    <LoginContent />
  </Admin>
);

export default Login;
