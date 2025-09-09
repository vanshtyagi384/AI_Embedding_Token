import { Button } from "@/components/ui/button";

interface BoxWithClearProps {
  text: string;
  setText: (value: string) => void;
}

export default function BoxWithClear({ text, setText }: BoxWithClearProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="ml-10 mr-10 mt-4 border rounded-md p-12 max-w bg-amber-50 shadow flex flex-col gap-4">
      <textarea
        id="input-text"
        className="flex items-center justify-between px-2 py-4 bg-gray-100 ring-emerald-200 focus:ring-2"
        placeholder="Type a sentence to see how it flows through the model..."
        onChange={handleChange}
        value={text}
      />
      <Button onClick={() => setText("")}>Clear</Button>
    </div>
  );
}