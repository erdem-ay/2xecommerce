import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">WY E-Commerce</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="text-white">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/basket">
              <p className="text-white">Basket</p>
            </Link>
          </li>
          <li>
            <Link href="/my-account">
              <p className="text-white">My Account</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;