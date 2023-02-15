import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from '../hooks/useAuth'

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);

  const { signIn, signUp} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }
  return (
    <div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transpartent">
      <Head>
        <title>Netflix</title>
        <link rel="+icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Image
        src="/images/background/login-background.jpeg"
        fill
        className="-Z-10 !hidden opacity-60 sm:!inline object-cover"
        sizes="100vh"
        priority
        alt="background"
      />
      <img
        src="images/logo/Netflix_2015_logo.svg"
        className="absolute object-contain cursor-pointer top-4 left-4 md:left-10 md:top-6"
        alt="Netflix Logo"
        width={150}
        height={150}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className={`input ${
                errors.email && "border-b-2 border-orange-500"
              }`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className={`input ${
                errors.password && "border-b-2 border-orange-500"
              }`}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={() => setLogin(true)}>
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            type="submit"
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
