"use client";

import { Bell, CircleUserRound } from "lucide-react";
import Logo from "./Logo";
import Account from "./Account";
import Notifications from "./Notificatoin";
import { ModeToggle } from "./Mode";

const AdminHeader = () => {
  return (
    <div className="flex w-full flex-col gap-3  ">
      <div className="flex top-5 left-40 flex-row items-center justify-between ">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex flex-row gap-5">
          <ModeToggle />

          <button>
            <Notifications />
          </button>
          <button>
            <Account />
          </button>
        </div>
      </div>
      <div className="flex border-b-2"></div>
    </div>
  );
};

export default AdminHeader;
