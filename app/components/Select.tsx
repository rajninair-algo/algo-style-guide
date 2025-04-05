type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ children, ...props }: Props) {
  return (
    <select
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    >
      {children}
    </select>
  );
}
