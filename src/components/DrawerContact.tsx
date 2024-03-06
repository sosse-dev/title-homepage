"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerContact({
  content,
  style,
}: {
  content: string;
  style: string;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button title="Contact Me" className={style}>
          {content}
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-primary">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-6xl text-accent2 font-bold">
              Contact Me
            </DrawerTitle>
            <DrawerDescription className="text-zinc-200">
              I don{"'"}t know how you can get here but, Hi!
            </DrawerDescription>
          </DrawerHeader>
          <div className="">
            <div className="h-fit flex flex-col gap-y-2">
              <p className="w-fit mx-auto px-3 py-2 text-sm text-zinc-200 bg-secondary rounded-md">
                sosse3135@gmail.com{" "}
                <span className="border-l-2 ml-1 pl-1">+62882 0196 00180</span>
              </p>
              <a
                target="_blank"
                href="https://www.instagram.com/sosse.dev"
                className="grow border-2 border-accent1 hover:border-accent2 py-4 pl-4 text-zinc-200"
              >
                Instagram
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/people/Ahmad-Sosse/pfbid02QqMvBwCbprkHDxNH6juf239Xusc4ominF6jaM4E1nQFTVVeL6P4i8jonV39PJPNnl/?locale=id_ID"
                className="grow border-2 border-accent1 hover:border-accent2 py-4 pl-4 text-zinc-200"
              >
                Facebook
              </a>
              <a
                target="_blank"
                href="https://x.com/sossedev?t=h6HBuYkds8xBTeaHqbhFw&s=09"
                className="grow border-2 border-accent1 hover:border-accent2 py-4 pl-4 text-zinc-200"
              >
                Twitter
              </a>
              <a
                target="_blank"
                href="https://wa.me/62882019600180"
                className="grow border-2 border-accent1 hover:border-accent2 py-4 pl-4 text-zinc-200"
              >
                Whatsapp
              </a>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
