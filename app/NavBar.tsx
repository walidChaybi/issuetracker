import { FaBug } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug className="text-2xl text-red-600" />
      </Link>

      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            key={`${href}${label}`}
            href={href}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
