"use client";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";

function ButtonHome2() {
  return (
    <DropdownMenuItem
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={() => scrollTo(0, 0)}
    >
      Home<DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}

export default ButtonHome2;
