"use client";

import { messages as initialMessages, Message } from "@/lib/messages";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

export default function ChatWrapper() {
  const [msgs, setMsgs] = useState<Message[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: String(Date.now()),
      type: "outgoing",
      text,
      timestamp: new Date().toISOString(),
      senderName: "Alex Morgan",
      avatar: "/avatars/alex.png",
    };
    setMsgs((prev) => [...prev, newMsg]);
  };

  return (
    <div className="flex flex-col max-h-[90vh]">
      <ChatHeader
        senderName={
          msgs.find((msg) => msg.type === "incoming")?.senderName || "Unknown"
        }
      />
      <ChatWindow messages={msgs} bottomRef={bottomRef} />
      {/* <ChatInput onSend={handleSend} /> */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}
