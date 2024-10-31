'use client'

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";



export default function Navbar() {
  
  const pathname = usePathname();

  return (
    <div className="bg-[--bgSoft] rounded-md flex justify-between items-center p-4">
      {/* Page Title */}
      <div className="font-bold capitalize text-[--textSoft] text-[0.9rem]">
        {pathname.split("/").pop()}
      </div>

      {/* Navbar Tabs & features */}
      <div className="flex items-center gap-8">
        {/* Seachbar */}
        <div className="flex items-center bg-[#2e374a] rounded-lg gap-2 py-1 px-2">
          <MdSearch />
          <input
            type="text"
            placeholder="search ..."
            className="bg-transparent outline-none max-w-[9.2rem] text-sm"
          />
        </div>

        {/* Tabs Section */}
        <div className="flex items-center justify-between gap-4">
          <MdOutlineChat className="cursor-pointer" size={20} />
          <MdNotifications className="cursor-pointer" size={20} />
          <MdPublic className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
}
