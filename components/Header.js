import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <span className="text-2xl font-bold tracking-wide cursor-pointer">
            Gafur's Blog
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="https://github.com/gafuradm" target="_blank">
            GitHub
          </Link>
          <a href="mailto:gafur.adm09adm@yandex.ru">Контакты</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
