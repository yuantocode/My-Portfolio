import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Optional helper; remove if not using

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const dropdownItems = [
  { name: "Certificates", href: "#certificates" },
  { name: "Seminars", href: "#seminars" },
  { name: "Practicum", href: "#practicum" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="text-glow text-foreground">Uan's</span>&nbsp;Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors"
            >
              <span>More</span>
              <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-md shadow-lg z-50">
                {dropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl text-center">
            {[...navItems, ...dropdownItems].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
