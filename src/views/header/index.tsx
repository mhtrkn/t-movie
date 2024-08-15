import "server-only";
import NavbarLogo from "@/assets/icons/nav-logo";
import SearchIcon from "@/assets/icons/search";
import Link from "next/link";
import { ROUTES } from "@/routes";

function Header() {
  return (
    <div className="container absolute z-10 top-0 mx-auto left-0 right-0 max-w-[90rem] w-full flex items-center justify-between py-10 px-0">
      <Link href={ROUTES.HOME}>
        <NavbarLogo width={108} height={35} />
      </Link>
      <nav className="flex items-center space-x-16 text-white-100">
        <a href="/movies">New Movie</a>
        <a href="/genre">Genre</a>
        <a href="/movies">Movies</a>
        <a href="/tv-series">Tv Series</a>
        <div className="flex items-center justify-center pl-6 border-l border-white cursor-pointer">
          <SearchIcon width={20} height={20} color="white" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
