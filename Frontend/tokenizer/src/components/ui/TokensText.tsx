interface TokensTextProps {
  text: string;
}

export default function TokensText({ text }: TokensTextProps) {
  // Use the text prop as needed
  return (
   <div className="ml-10 mr-10 mt-4 border rounded-md p-12 max-w bg-amber-50 shadow flex flex-col gap-4">
    <textarea
        id="input-text"
        className="flex items-center justify-between px-2 py-4 bg-gray-100 ring-emerald-200 focus:ring-2"
        placeholder="Type a sentence to see how it flows through the model..."
        value={text}
      />
   </div>
  );
}