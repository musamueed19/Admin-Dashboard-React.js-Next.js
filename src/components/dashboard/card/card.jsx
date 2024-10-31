import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className="flex bg-[--bgSoft] p-4 gap-3 w-full hover:bg-[#2e374a] rounded-lg">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-4">
        <span className="text-base text-[--textSoft]">Total Users</span>
        <span className="font-bold text-lg">10.928</span>
        <span className="text-xs">
          <span className="text-green-500 mr-1">12%</span>
          more than previous week
        </span>
      </div>
    </div>
  );
}
