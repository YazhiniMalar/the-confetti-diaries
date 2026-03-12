import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", href: "/#about" },
  { label: "Works", href: "/#works" },
  { label: "Captured Moments", href: "/portfolio" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-display text-lg font-bold tracking-[0.15em] text-foreground">
          THE CONFETI DIARIES
        </Link>
        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
          {links.map((l) =>
            l.href.startsWith("/") && !l.href.startsWith("/#") ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sans text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary uppercase"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className="text-sans text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary uppercase"
              >
                {l.label}
              </a>
            )
          )}
        </div>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-4 bg-ivory/95 px-6 pb-6 md:hidden backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l) =>
              l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sans text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-sans text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase"
                >
                  {l.label}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
