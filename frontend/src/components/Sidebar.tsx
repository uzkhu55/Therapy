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
  Search,
  CirclePlus,
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
    <div className="flex w-1/4 h-[100%] rounded-l-lg bg-[#f3f3f3] text-black">
      <div className="flex w-[100%] flex-col">
        <div className="flex w-[97%] bg-white  rounded-2xl p-4 m-[10px] items-center justify-evenly">
          <div className="font-bold text-xl text-[#325343]">Chat</div>
          <div className="w-[220px] relative">
            <Input className="focus-visible:outline-none rounded-2xl" />
            <Search className="absolute top-2 right-2" />
          </div>
          <button className="w-[24px] text-[#325343]">
            <CirclePlus />
          </button>
        </div>
        <div className="bg-white w-[97%] h-full mb-4 p-4 ml-[10px] rounded-2xl px-4">
          <div className="text-sm font-black py-4 px-2 text-black">
            Recent Chats
          </div>
        </div>
      </div>
    </div>
  );
}
