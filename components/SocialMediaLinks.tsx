import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SocialMediaLinks() {
  const myEmail = "wassimbenjdida@gmail.com";
  const [isEmailCopied, setIsEmailCopied] = useState(false)
  const onCopyEmail = () => {
    setIsEmailCopied(true)
    setTimeout(() => {
      setIsEmailCopied(false)
    }, 700)
  }

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/wassimbj"
        className="inline-block text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5]"
      >
        Github↗
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://linkedin.com/in/wassimbenjdida"
        className="inline-block text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5]"
      >
        Linkedin↗
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/bjwassim"
        className="inline-block text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5]"
      >
        Twitter↗
      </a>
      <CopyToClipboard text={myEmail} onCopy={onCopyEmail}>
        <button
          title="Click to copy"
          className="inline-block cursor-pointer text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5]"
        >
          {isEmailCopied ? "Email is copied" : "Email"}
        </button>
      </CopyToClipboard>
    </div>
  );
}
