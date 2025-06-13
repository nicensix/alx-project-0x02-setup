import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to ALX Project 2 🎉</h1>
        <p className="text-lg text-gray-700">Next.js + TypeScript + Tailwind starter is ready!</p>
      </main>
    </>
  );
}