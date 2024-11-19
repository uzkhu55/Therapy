"use client";
import { useState } from "react";
import {
  PaperclipIcon,
  ArrowUpIcon,
  XIcon,
  ChevronRightIcon,
  BookOpenIcon,
  FolderIcon,
  MessageSquareIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { UserButton } from "@clerk/clerk-react";

interface ComponentProps {
  bg: string;
  text: string;
  textchat: string;
  bgchat: string;
}

export default function Component({
  bg,
  text,
  bgchat,
  textchat,
}: ComponentProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex w-1/4 h-[100%] rounded-l-lg bg-white text-black">
      <div className=" border-white/10 flex flex-col">
        <div className="">
          <AlertDialog>
            <AlertDialogTrigger className="m-4 outline-none w-[320px]">
              <div
                className={`w-full justify-start outline-none bg-white items-center text-sm flex pl-4 p-2 gap-2 rounded-lg ${bgchat} ${textchat}  border-white/10`}
              >
                <MessageSquareIcon className="h-4  w-4" />
                New Chat
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Search User by Name</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="mt-4 px-4">
          <div className="text-sm text-black">Recent Chats</div>
          <div className="mt-2 space-y-1">
            <Button
              variant="ghost"
              className="w-[60%] justify-start text-white bg-[#325342]"
            >
              User1
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-black hover:text-white hover:bg-white/10"
            >
              User2
            </Button>
          </div>
        </div>
        <div className="mt-auto p-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}
