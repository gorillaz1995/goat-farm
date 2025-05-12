"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Acasă", href: "/" },
    { name: "Produse", href: "/produse" },
    { name: "Despre Noi", href: "/despre" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#F9F4EA" }}
    >
      <div className="container flex h-14 lg:h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center space-x-3"
          onClick={closeMenu}
        >
          <div className="relative h-12 w-12 lg:h-16 lg:w-16 overflow-hidden rounded-full border-2 border-[#224A3D]/20">
            <Image
              src="/logo-capra.jpeg"
              alt="Ferma de Capre Mureș Logo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 5rem, 5rem"
              priority
            />
          </div>
          <span
            className="text-xl font-bold hidden sm:inline-block"
            style={{ color: "#224A3D" }}
          >
            Capra Monte Farm
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#224A3D] relative group ${
                pathname === item.href
                  ? "text-[#224A3D] font-semibold"
                  : "text-[#224A3D]/70"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#224A3D] transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? "w-full" : ""
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={toggleMenu}
            style={{ color: "#224A3D" }}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#224A3D]/10"
            style={{ backgroundColor: "#F9F4EA" }}
          >
            <div className="container flex flex-col space-y-3 py-4">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  style={{ color: "#224A3D" }}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-base font-medium transition-colors hover:bg-[#224A3D]/5 rounded-md px-3 ${
                    pathname === item.href
                      ? "text-[#224A3D] font-semibold bg-[#224A3D]/10"
                      : "text-[#224A3D]/70"
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
