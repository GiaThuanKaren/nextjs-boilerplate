"use client"
import { useState } from "react";

const CopyButton = ({
  text,
  height,
  width,
}: {
  text: string;
  width?: string;
  height?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500); // Chuyển lại icon copy sau 2 giây
    });
  };

  return (
    <div className="hover:cursor-pointer" onClick={handleCopy}>
      {copied ? <h3>Weeee</h3> : <h3>Coppy Button</h3>}
    </div>
  );
};

export default CopyButton;
