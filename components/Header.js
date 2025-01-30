import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <Link href="/">
          <span>Gafur's Blog</span>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="https://github.com/gafuradm" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <a href="mailto:gafur.adm09adm@yandex.ru">gafur.adm09adm@yandex.ru</a>
      </div>
    </header>
  );
};

export default Header;