type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea(props: Props) {
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-primary-light"
    />
  );
}
