"use client";
import {
  LinkedinShare,
  XShare,
  RedditShare,
  WhatsappShare,
} from "react-share-kit";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoCopy } from "react-icons/go";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { hanken } from "@/public/font";

export default function ShareButton({
  id,
  title,
  shortDes,
}: {
  id: string;
  title: string;
  shortDes?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const shareUrl = `https://ankit.10xdevlab.in/blog/${id}`;
  const shareText = ` CHECKOUT THIS BLOG BY ANKIT KASHYAP 
  ${title} : ${shareUrl} `;

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(shareText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return (
    <div className="flex flex-wrap gap-x-2 items-center ">
      <Dialog>
        <DialogTrigger
          render={
            <button className=" bg-transparent text-black dark:text-white  p-2 w-fit text-sm rounded-lg inset-shadow-sm inset-shadow-black/30  dark:inset-shadow-white/30 px-4 py-2 my-3 rounded-lg cursor-pointer w-full">
              <p>Share Blog</p>
            </button>
          }
        />

        <DialogContent className="sm:max-w-md dark:bg-[#212121] ">
          <DialogHeader>
            <DialogTitle
              className={`text-black dark:text-white ${hanken.className}`}
            >
              Share Blog Link
            </DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <div className="flex flex-row items-center justify-between gap-2 w-full border-2 border-zinc-200 dark:border-zinc-600 rounded-md  px-2  ">
              <Input
                className="border-0 outline-0 focus-visible:border-0 focus-visible:ring-0 w-11/12 px-0 dark:bg-transparent text-black dark:text-white"
                id="link"
                defaultValue={shareUrl}
                readOnly
              />
              {!isCopied ? (
                <GoCopy
                  cursor={"pointer"}
                  onClick={handleClick}
                  size={16}
                  className="text-black dark:text-white"
                />
              ) : (
                <IoIosCheckmarkCircleOutline
                  cursor={"pointer"}
                  aria-disabled
                  size={24}
                  className="fill-green-500"
                />
              )}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-2">
            <div className="border w-full h-0 border-zinc-200 dark:border-zinc-600"></div>
            <div>
              <p className={`${hanken.className} text-black dark:text-white`}>
                OR
              </p>
            </div>
            <div className="border w-full h-0 border-zinc-200 dark:border-zinc-600"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center  gap-x-4">
            <WhatsappShare
              url={shareUrl}
              title={title}
              size={30}
              blankTarget={true}
            />
            <LinkedinShare
              url={shareUrl}
              title={title}
              summary={shortDes}
              size={30}
              blankTarget={true}
            />
            <XShare
              url={shareUrl}
              title={title}
              className="my-share-button"
              size={30}
              blankTarget={true}
            />
            <RedditShare
              url={shareUrl}
              title={title}
              size={30}
              blankTarget={true}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
