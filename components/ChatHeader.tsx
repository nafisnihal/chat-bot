import { CircleCheck, Tag } from "lucide-react";
import SessionTag from "./SessionTag";

export default function ChatHeader({ senderName }: { senderName: string }) {
  const tags = [
    { id: 1, name: "important" },
    { id: 2, name: "important valuable custo..." },
    { id: 3, name: "VIP" },
    { id: 4, name: "SCAM" },
    { id: 5, name: "feedback" },
    { id: 6, name: "action required" },
    { id: 7, name: "pending" },
    { id: 8, name: "completed" },
    { id: 9, name: "archived" },
    { id: 10, name: "deleted" },
    { id: 11, name: "new" },
  ];

  return (
    <div>
      <div className="px-4.5 py-2 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="w-8 h-8 rounded-full bg-[#FA8F53] text-white flex justify-center items-center">
              {senderName.charAt(0).toUpperCase()}
            </p>
            <span className="text-lg font-medium text-black">{senderName}</span>
          </div>
          <button className="bg-[#A946BA] px-3 py-1.5 flex items-center justify-center gap-2 rounded-[10px] text-white text-sm font-semibold cursor-pointer  hover:shadow-lg">
            <CircleCheck size={16} />
            <p>Close</p>
          </button>
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {tags.slice(0, 4).map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 text-[#425066] px-2 py-1"
            >
              <Tag size={14} />
              <span>{tag.name}</span>
            </div>
          ))}
          {tags.length > 4 && (
            <div className="flex items-center gap-1 text-[#425066] px-2 py-1">
              <span>{tags.length - 4}+</span>
            </div>
          )}
        </div>
      </div>
      <div className="px-4.5 py-7.5 flex items-center gap-5">
        <p className="w-[88px] h-[88px] rounded-full bg-[#FA8F53] text-white text-2xl flex justify-center items-center">
          {senderName.charAt(0).toUpperCase()}
        </p>
        <div>
          <p className="text-lg font-semibold text-black">
            {senderName} started the chat
          </p>
          <div className="flex items-center gap-2 mt-3">
            <img src="/Messenger.svg" alt="icon" className="w-5.5 h-5.5" />
            <p className="text-sm text-[#425066] font-normal">
              Joined via Messenger
            </p>
          </div>
        </div>
      </div>
      <SessionTag />
    </div>
  );
}
