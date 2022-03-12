import React from "react";

export default function Navbar() {
  const navSections = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Blog", href: "https://dev.to/wassimbj" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="flex items-center justify-center py-3 px-2">
      <nav className="flex items-center flex-wrap text-gray-400 space-x-5">
        {navSections.map((item, i) => (
          <a
            key={i}
            className="block hover:text-lightGreen md:text-lg text-base"
            href={item.href}
          >
            --{item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
