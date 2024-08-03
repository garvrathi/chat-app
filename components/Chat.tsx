import Image from "next/image";

const Chat = () => {
  return (
    <div
      className="absolute overflow-y-auto top-[96px] left-0 lg:left-[320px] right-0 min-h-[calc(100vh-96px)] max-h-[calc(100vh-96px)] pt-20 pb-20h px-4 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-[#363738]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#767876]
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className="flex items-center gap-[13px]">
        <div className="relative w-12 h-12">
          <Image
            src="/images/avatar.jpg"
            alt="user"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="bg-[#363738] text-white py-2 px-5 rounded-[30px] text-sm font-medium">
          Hello how are you?
        </span>
      </div>
      <div className="flex justify-end mt-5">
        <span className="bg-[#363738] text-white py-2 px-5 rounded-[30px] text-sm font-medium">
          Hello how are you?
        </span>
      </div>
      <div className="flex items-center gap-[13px] mt-5">
        <div className="relative w-12 h-12">
          <Image
            src="/images/avatar.jpg"
            alt="user"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="bg-[#363738] text-white py-2 px-5 rounded-[30px] text-sm font-medium">
          Hello how are you?
        </span>
      </div>
      <div className="flex items-center gap-[13px] mt-5">
        <div className="relative w-12 h-12">
          <Image
            src="/images/avatar.jpg"
            alt="user"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="bg-[#363738] text-white py-2 px-5 rounded-[30px] text-sm font-medium">
          Hello how are you?
        </span>
      </div>
      <div className="flex items-center gap-[13px] mt-5">
        <div className="relative w-12 h-12">
          <Image
            src="/images/avatar.jpg"
            alt="user"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="bg-[#363738] text-white py-2 px-5 rounded-[30px] text-sm font-medium">
          Hello how are you?
        </span>
      </div>
    </div>
  );
};

export default Chat;
