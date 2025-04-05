export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-xl font-medium text-indigo-600 mb-3">{children}</h3>
  );
}
