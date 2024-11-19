"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, ImagePlay, SmilePlus } from "lucide-react";

export const CommentComponent = () => {
  return (
    <div className="w-[590px] h-auto p-3 rounded-md shadow-md mx-auto bg-[#fdfcf6] flex gap-10">
      <div className="flex gap-3 mt-1">
        <img
          className="w-10 h-10 rounded-full"
          src="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-1/317618240_1307099933387439_7595242074711560404_n.jpg?stp=dst-jpg_s320x320&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=YDs60qhGOuMQ7kNvgGDjPEB&_nc_zt=24&_nc_ht=scontent.fuln1-1.fna&_nc_gid=Agp49QvYxNdmn6dEWr0Xyp7&oh=00_AYDSSqMTV2GahTqD8F6dVxNVnYRLs3xOBgnvJOUhWlAxgQ&oe=67411C5D"
          alt="profile"
        />
        <div>
          <p className="text-sm font-bold flex items-center">tsovoo</p>
          <p className="text-sm">24.11.18</p>
        </div>
      </div>
      <div className="flex w-full items-center space-x-2">
        <div className="w-full space-x-2">
          <Input type="text" placeholder="Comment as Tsovoo Ganbold" />
          <div className="flex gap-3">
            <SmilePlus />
            <Camera />
            <ImagePlay />
          </div>
        </div>
      </div>
    </div>
  );
};
