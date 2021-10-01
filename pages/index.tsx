import Head from "next/head";
import TerminalText from "@components/TerminalText";

export default function Home() {
  return (
    <>
      <Head>
        <title>mitherz</title>
      </Head>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="md:text-8xl text-4xl md:w-1/2 w-8/12">
          <TerminalText words={["Technologie", "QR-Codes", "IT-Support"]} />
          <br />
          <span>mit</span>
          <br />
          <span>Herz</span>
        </h1>
      </div>
    </>
  );
}
