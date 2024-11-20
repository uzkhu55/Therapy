"use client";

import {
  CalendarDays,
  FileChartColumn,
  Settings,
  StickyNote,
  Users,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import Clients from "./Clients";
import Specialist from "./Specialist";
import Analytics from "./Analytics";

type SideBarProps = {
  toggleHandler: (arg0: string) => void;
  toggle: string;
};

const SideBar = ({ toggleHandler, toggle }: SideBarProps) => {
  // const [toggle, setToggle] = useState("Clients");
  const rightSide = [
    { label: "Clients", icon: <UsersRound /> },
    { label: "Specialist", icon: <Users /> },
    { label: "Post", icon: <StickyNote /> },
    { label: "Analytics", icon: <CalendarDays /> },
    { label: "Settings", icon: <Settings /> },
  ];
  // const toggleHandler = (word: string) => {
  //   setToggle(word);
  // };

  return (
    <div className="flex flex-col gap-4 bg-white-50 rounded-xl w-[222px]  top-[48px]">
      {rightSide.map(({ label, icon }, index) => {
        return (
          <button
            key={label}
            onClick={() => toggleHandler(label)}
            className={`flex flex-row gap-2 px-4 py-2 items-center ${
              toggle === label && "bg-gray-100"
            }`}
          >
            {icon}
            <p className="font-semibold text-4">{label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
