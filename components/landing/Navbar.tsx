"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Pricing", link: "/pricing" },
  { name: "Community", link: "/community" },
  { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-28 md:w-36 h-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block border border-gray-300 rounded-lg px-6 py-2 text-sm hover:bg-black hover:text-white transition">
          Get started free
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              {link.name}
            </Link>
          ))}

          <button className="border border-gray-300 rounded-lg px-6 py-2 text-sm mt-2">
            Get started free
          </button>
        </div>
      )}
    </nav>
  );
}