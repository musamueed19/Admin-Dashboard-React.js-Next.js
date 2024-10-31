import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink";
import Image from "next/image";



const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="sticky top-10 space-y-10">
      {/* User Profile Section */}
      <div className="flex xl:flex-row lg:flex-col gap-5 mb-5 items-center justify-center lg:justify-normal">
        <Image
          src="/noavatar.png"
          alt="user image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="hidden lg:flex lg:flex-col">
          <span className="text-sm">Muhammad Musa Mueed</span>
          <span className="text-xs text-[--textSoft]">Software Engineer</span>
        </div>
      </div>

      {/* Side Menubar Section - Whole */}
      <ul className="space-y-4">
        {menuItems.map((cat) => (
          <li key={cat.title} className="space-y-1">
            <span className="text-[--textSoft]">{cat.title}</span>
            <div className="space-y-1">
              {cat.list.map((item) => (
                <MenuLink key={item.title} item={item} />
              ))}
            </div>
          </li>
        ))}
      </ul>

      <button className="flex gap-2 items-center justify-center md:justify-normal rounded-md hover:bg-[#2e374a] p-2 w-full">
        <MdLogout />
        <span className="hidden md:block text-sm">Logout</span>
      </button>
    </div>
  );
}

{/*
<div className="sticky top-40">


      <div className="flex items-center gap-[1.25rem] mb-5">
        <Image src="/noavatar.png" alt="user image" width={50} height={50} />
        <div>
          <span className="">Muhammad Musa Mueed</span>
          <span>Software Engineer</span>
        </div>
      </div>

<ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
*/}