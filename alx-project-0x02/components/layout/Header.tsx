import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;