import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

export default function Header_media() {
  return (
     <header className="flex items-center justify-between px-8 py-4 bg-gray-100">
      <Label className="text-2xl font-bold">Tokenizer Project for Chai aur GenAl</Label>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Button asChild variant="ghost">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
