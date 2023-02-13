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
    </div>
  );
};

export default Login;
