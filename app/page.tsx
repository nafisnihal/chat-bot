import ChatWrapper from "@/components/ChatWrapper";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-[1080px] border rounded-md bg-white shadow">
        <ChatWrapper />
      </div>
    </main>
  );
}
