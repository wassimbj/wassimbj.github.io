import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


type Section = { label: string; href: string; newWindow?: boolean };


export default function Navbar() {
  const router = useRouter()
  const activePath = router.pathname
  const navSections: Array<Section> = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Blog", href: "/blog" },
  ];
  console.log(activePath)
  return (
    <header className="flex items-center justify-center p-2 bg-lightGreen/5" id="navbar">
      <nav className="flex items-center flex-wrap text-gray-400 space-x-5">
        {navSections.map((item, i) => (
          <Link
            key={i}
            className={`block hover:bg-lightGreen/10 hover:text-lightGreen md:text-lg text-base ${activePath == item.href ? "text-lightGreen" : ""}}`}
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
