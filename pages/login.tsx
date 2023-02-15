import Head from "next/head";
import Image from "next/image";

const Login = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transpartent">
      <Head>
        <title>Netflix</title>
        <link rel="+icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-Z-10 !hidden opacity-60 sm:!inline object-cover"
        sizes="100vh"
        priority
        alt="background"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute object-contain cursor-pointer top-4 left-4 md:left-10 md:top-6"
        alt="Netflix Logo"
        width={150}
        height={150}
      />
      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              name=""
              placeholder="Enter your email"
              className="input"
            />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            type="submit"
            className="cursor-pointer text-white hover:underline"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
