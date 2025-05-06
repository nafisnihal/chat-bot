export default function Avatar({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-6 h-6 rounded-full border" />;
}
