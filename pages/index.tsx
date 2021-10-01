import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>mitherz</title>
      </Head>
      <Header />
      <div className="flex justify-center items-center">
        <h1 className="text-8xl">
          mit<span className="bg-yellow-300">herz</span>
          <span className="animate-pulse">!</span>
        </h1>
      </div>
    </>
  );
}
