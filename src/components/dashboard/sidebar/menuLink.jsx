"use client";
// Imports from our Libraries or dependencies (package.json)
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }) {
  const pathname = usePathname();
  const isAcitve = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`
    flex items-center gap-2 ml-1 lg:ml-2 p-3 hover:bg-[#2e374a]/60 rounded-md md:w-full justify-center md:justify-normal
    ${isAcitve ? "bg-[#2e374a]" : ""}
    
    `}
    >
      {item.icon}
      <span className="hidden md:block text-sm">{item.title}</span>
    </Link>
  );
}
