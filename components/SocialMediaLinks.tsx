import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SocialMediaLinks({ myEmail }) {
  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/wassimbj"
        className="inline-block underline text-lightGreen hover:bg-lightGreen/20"
      >
        Github↗
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://linkedin.com/in/wassimbenjdida"
        className="inline-block underline text-lightGreen hover:bg-lightGreen/20"
      >
        Linkedin↗
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/bjwassim"
        className="inline-block underline text-lightGreen hover:bg-lightGreen/20"
      >
        Twitter↗
      </a>
      <CopyToClipboard text={myEmail} onCopy={() => alert("Copied 😁✅")}>
        <button
          title="Click to copy"
          className="inline-block cursor-pointer underline text-lightGreen hover:bg-lightGreen/20"
        >
          Email
        </button>
      </CopyToClipboard>
    </>
  );
}
