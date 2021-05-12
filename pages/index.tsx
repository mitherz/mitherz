import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>mitherz</title>
      </Head>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-8xl">
          mit<span className="bg-yellow-300">herz</span>
          <span className="animate-pulse">!</span>
        </h1>
      </div>
    </>
  );
}
