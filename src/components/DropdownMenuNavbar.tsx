import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ButtonHome2 from "./ButtonHome";

export function DropdownMenuNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="navbar-menu" className="px-4 py-3 bg-secondary rounded-lg hover:bg-primary border-2 text-zinc-100 font-semibold outline-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-primary text-white border-2 border-zinc-200">
        <DropdownMenuLabel className="font-bold">Navbar Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ButtonHome2 />
          <DropdownMenuItem>
            <a target="_blank" href="https://sosse.vercel.app">
              About Me
            </a>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
