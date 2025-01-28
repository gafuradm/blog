import Head from "next/head";
import PostList from "../components/PostList.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Мой блог</title>
        <meta name="description" content="Личный блог о разработке и технологиях." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">Добро пожаловать в мой блог!</h1>
            <p className="text-gray-600 mt-2">Думай, пиши, делись мыслями.</p>
          </header>
          <section>
            <PostList />
          </section>
        </div>
      </main>
    </>
  );
}
