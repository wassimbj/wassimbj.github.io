import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#d9ece7] bg-[#edf9f5] px-3 py-4 text-slate-700">
      <div className="flex flex-col items-center justify-around gap-2 text-xs md:flex-row">
        <span> wassim ben jdida ©{new Date().getFullYear()} </span>
        <span>Built by me ƪ(˘⌣˘)ʃ</span>
      </div>
    </footer>
  );
}
