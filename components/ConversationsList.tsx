import Image from "next/image";

const ConversationsList = () => {
  return (
    <div className="nt-6 px-4">
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#363738] rounded-[10px] cursor-pointer">
        <div className="w-14 h-14 relative">
          <span className="absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10"></span>
          <Image
            src="/images/avatar.jpg"
            fill
            className="w-full h-full object-cover rounded-full"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-white capitalize text-xs font-semibold">
            User1
          </span>
          <span className="text-[#767876] block text-xs font-semibold">
            Hello
          </span>
        </div>
      </ul>
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#363738] rounded-[10px] cursor-pointer mt-[13px]">
        <div className="w-14 h-14 relative">
          <span className="absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10"></span>
          <Image
            src="/images/avatar.jpg"
            fill
            className="w-full h-full object-cover rounded-full"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-white capitalize text-xs font-semibold">
            User2
          </span>
          <span className="text-[#767876] block text-xs font-semibold">
            Hello
          </span>
        </div>
      </ul>
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#363738] rounded-[10px] cursor-pointer mt-[13px]">
        <div className="w-14 h-14 relative">
          <span className="absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10"></span>
          <Image
            src="/images/avatar.jpg"
            fill
            className="w-full h-full object-cover rounded-full"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-white capitalize text-xs font-semibold">
            User3
          </span>
          <span className="text-[#767876] block text-xs font-semibold">
            Hello
          </span>
        </div>
      </ul>
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#363738] rounded-[10px] cursor-pointer mt-[13px]">
        <div className="w-14 h-14 relative">
          <span className="absolute top-0 right-0 bg-[#00FF38] w-[15px] h-[15px] rounded-full z-10"></span>
          <Image
            src="/images/avatar.jpg"
            fill
            className="w-full h-full object-cover rounded-full"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-white capitalize text-xs font-semibold">
            User4
          </span>
          <span className="text-[#767876] block text-xs font-semibold">
            Hello
          </span>
        </div>
      </ul>
    </div>
  );
};

export default ConversationsList;
