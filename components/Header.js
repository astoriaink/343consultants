"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { navItems, site } from "@/lib/site-data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="343 Consultants home">
        <Image src="/images/343-logo.png" alt="343 Consultants" width={164} height={67} priority />
      </Link>
      <nav className={`nav${isOpen ? " is-open" : ""}`} aria-label="Main navigation" id="site-menu">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-call" href={`tel:${site.phone.replace(/\s/g, "")}`}>
        <Phone size={18} aria-hidden="true" />
        <span>{site.phone}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="site-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
    </header>
  );
}
