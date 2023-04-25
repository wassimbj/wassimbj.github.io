import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0a3d4b] px-3s py-3">
      <div className="flex items-center justify-around md:flex-row flex-col text-xs">
        <span> wassim ben jdida ©{new Date().getFullYear()} </span>
        <span>Built by me ƪ(˘⌣˘)ʃ</span>
      </div>
    </footer>
  );
}
