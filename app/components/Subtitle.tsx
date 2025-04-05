export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-gray-600 mb-2">{children}</h2>
  );
}
