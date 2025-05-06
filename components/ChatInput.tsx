"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
      setIsFocused(false);
    }
  };

  return (
    <div
      className={`border transition-all duration-300 rounded-2xl p-2 m-4 ${
        isFocused ? "border-[#A946BA]" : "border-[#DAE0E4]"
      }`}
    >
      <textarea
        className={`w-full px-2 resize-none bg-transparent outline-none text-[#425066] overflow-y-auto custom-scrollbar transition-all duration-300 placeholder:text-[#7B8594] ${
          isFocused ? "min-h-[100px]" : "h-[30px]"
        }`}
        placeholder="Write message"
        value={message}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (message.trim() === "") setIsFocused(false);
        }}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className={`mt-4 ml-auto flex items-center gap-2 px-3 py-1.5 rounded-[10px] transition-all duration-300 font-semibold ${
          isFocused
            ? "bg-[#A946BA] text-white hover:shadow-lg"
            : "text-[#44546F] opacity-40"
        } ${!!message.trim() ? "cursor-pointer " : "cursor-not-allowed"} `}
        disabled={!message.trim() || !isFocused}
        onClick={handleSend}
      >
        <Send size={20} className="font-semibold" />
        Send
      </button>
    </div>
  );
}
