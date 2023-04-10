import Chat from "@/components/Chat";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatbot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-screen">
        <Chat></Chat>
      </main>
    </>
  );
}
