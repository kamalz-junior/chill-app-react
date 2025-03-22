import { useState } from "react";
import { Link, NavLink } from "react-router";
import { button } from "~/components/ui/button";
import UserNav from "~/components/user-nav";

export default function Navbar() {
  const [_isOpen, _setIsOpen] = useState(false);

  return (
    <header className="w-full py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-2 md:gap-x-10">
          <Link to="/">
            <span className="font-bold">
              <img src="images/Logo (1).png" alt="" className="w-14 md:w-20" />
            </span>
          </Link>
          <nav className="flex items-center">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  button({
                    variant: "ghost",
                    size: "sm",
                    className: `${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"} text-xs md:text-sm`,
                    // isActive`
                    // ? "text-primary"
                    // : "text-muted-foreground hover:text-foreground",
                  })
                }
              >
                {link.label}
              </NavLink>
            ))}
            {/* <div
              onMouseOver={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="relative inline-block"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                Genre
                <ChevronDown
                  className={`${isOpen ? "rotate-180" : ""} size-4 transition-transform`}
                />
              </Button>
              {isOpen ? (
                <div className="-translate-x-1/2 absolute left-1/2 z-50">
                  <ul className="grid w-[280px] grid-cols-2 gap-x-8 rounded-md border bg-card p-4">
                    {genres.map((genre) => (
                      <li key={genre.label}>
                        <a
                          href={genre.href}
                          className="inline-block py-1 font-medium text-muted-foreground text-sm hover:text-foreground"
                        >
                          {genre.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div> */}
          </nav>
        </div>

        <UserNav />
      </div>
    </header>
  );
}

const links = [
  { href: "/series", label: "Series" },
  { href: "/movies", label: "Film" },
  { href: "/watchlist", label: "Daftar Saya" },
];
