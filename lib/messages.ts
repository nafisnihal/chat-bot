export type MessageType = "incoming" | "outgoing";

export interface Message {
  id: string;
  type: MessageType;
  text: string;
  timestamp: string;
  senderName: string;
  avatar: string;
}

export const messages: Message[] = [
  {
    id: "1",
    type: "incoming",
    text: "Hey team, I've been having a weird issue 😕",
    timestamp: "2023-11-17T14:48:00",
    senderName: "Jacob Jhones",
    avatar: "/avatars/jacob.png",
  },
  {
    id: "2",
    type: "incoming",
    text: "Every time I try to upload a CSV file to import contacts, it gets stuck at 80% and never finishes.",
    timestamp: "2023-11-17T14:48:40",
    senderName: "Jacob Jhones",
    avatar: "/avatars/jacob.png",
  },
  {
    id: "3",
    type: "outgoing",
    text: "Thanks for confirming. Could you upload a screenshot of what you see when it freezes?",
    timestamp: "2023-11-17T14:50:00",
    senderName: "Alex Morgan",
    avatar: "/avatars/alex.png",
  },
  {
    id: "4",
    type: "incoming",
    text: "Sure, Here it is",
    timestamp: "2023-11-17T14:52:40",
    senderName: "Jacob Jhones",
    avatar: "/avatars/jacob.png",
  },
  {
    id: "5",
    type: "outgoing",
    text: "Got it, that helps a lot.",
    timestamp: "2023-11-17T14:53:00",
    senderName: "Alex Morgan",
    avatar: "/avatars/alex.png",
  },
  {
    id: "6",
    type: "outgoing",
    text: "Also, in the meantime",
    timestamp: "2023-11-17T14:53:00",
    senderName: "Alex Morgan",
    avatar: "/avatars/alex.png",
  },
  {
    id: "7",
    type: "outgoing",
    text: "can you try uploading this sample file to check if the issue is file-specific?",
    timestamp: "2023-11-17T14:53:00",
    senderName: "Alex Morgan",
    avatar: "/avatars/alex.png",
  },
  {
    id: "8",
    type: "incoming",
    text: "That worked. So it's my file then?",
    timestamp: "2023-11-17T14:55:40",
    senderName: "Jacob Jhones",
    avatar: "/avatars/jacob.png",
  },
];
