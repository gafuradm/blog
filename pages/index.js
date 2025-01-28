import Head from "next/head";
import PostList from '../components/PostList.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Мой блог</title>
        <meta name="description" content="Личный блог о разработке и технологиях." />
        <link rel="icon" href="../public/favicon.png" type="image/png" />
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Добро пожаловать в мой блог!
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Думай, пиши, делись мыслями.
            </p>
          </header>
          <section>
            <PostList />
          </section>
        </div>
      </main>
    </>
  );
}
