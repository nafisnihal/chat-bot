import { Message } from "@/lib/messages";
import { format } from "date-fns";
import Avatar from "./Avatar";
import SessionTag from "./SessionTag";

interface Props {
  messages: Message[];
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

function shouldGroup(current: Message, prev?: Message) {
  if (!prev) return false;
  const sameSender = current.senderName === prev.senderName;
  const gap =
    new Date(current.timestamp).getTime() - new Date(prev.timestamp).getTime();
  return sameSender && gap <= 60000;
}

function isGroupEnd(current: Message, next?: Message) {
  if (!next) return true;
  const sameSender = current.senderName === next.senderName;
  const gap =
    new Date(next.timestamp).getTime() - new Date(current.timestamp).getTime();
  return !sameSender || gap > 60000;
}

export default function ChatWindow({ messages, bottomRef }: Props) {
  return (
    <div className="flex-1 max-h-[735px] bg-white overflow-y-auto custom-scrollbar">
      <SessionTag />
      <div className="px-4 py-3">
        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const next = messages[i + 1];
          const grouped = shouldGroup(msg, prev);
          const isLastInGroup = isGroupEnd(msg, next);

          const isIncoming = msg.type === "incoming";
          const bubbleStyle = isIncoming
            ? "bg-[#F1F4F5] text-black rounded-[10px]"
            : "bg-[#D9E8FF] text-black rounded-[10px]";

          return (
            <div
              key={msg.id}
              className={`flex ${
                isIncoming ? "justify-start" : "justify-end"
              } ${isLastInGroup ? "mb-5" : ""}`}
            >
              <div className={`w-full flex gap-2`}>
                <div
                  className={`flex flex-col  ${
                    isIncoming ? "items-start" : "items-end"
                  } flex-1`}
                >
                  {!grouped && (
                    <span
                      className={`text-[10px] text-[#6C7584] ${
                        isIncoming ? "pl-1" : "text-right pr-1"
                      }`}
                    >
                      {format(new Date(msg.timestamp), "p")} • {msg.senderName}
                    </span>
                  )}

                  <div className={`mt-1`}>
                    <div
                      className={`px-4 py-3 ${bubbleStyle} text-sm font-normal inline-block max-w-xl`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>

                {/* Outgoing avatar (only shown at end of group) */}
                {!isIncoming && !grouped ? (
                  <div className="flex items-end w-6 h-6 mt-1">
                    <Avatar src={msg.avatar} alt={msg.senderName} />
                  </div>
                ) : (
                  <div className="w-6 h-6 bg-transparent"></div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
