import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


type Section = { label: string; href: string; newWindow?: boolean };


export default function Navbar() {
  const router = useRouter();
  const activePath = router.pathname;
  const navSections: Array<Section> = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="flex items-center justify-center p-3 bg-[#edf9f5]" id="navbar">
      <nav className="flex items-center flex-wrap space-x-5 text-sm font-medium text-slate-600 md:text-base">
        {navSections.map((item, i) => (
          <Link
            key={i}
            className={`block rounded-full px-2 py-1 transition-colors hover:bg-[#dff5ee] hover:text-[#1d7d68] ${activePath === item.href ? "text-[#1d7d68]" : ""}`}
            target={item.newWindow ? "_blank" : "_self"}
            rel="noreferrer"
            href={item.href}
          >
            --{item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
