import { LuSendHorizonal } from "react-icons/lu";

const Form = () => {
  return (
    <div className="flex left-0 lg:left-[320px] right-0 bottom-[14px] items-center fixed gap-1.5 px-[30px]">
      <input
        type="text"
        name=""
        id=""
        placeholder="Message.........."
        className="bg-[#363738] h-[50px] rounded-[30px] px-6 outline-none flex-1 text-white placeholder:text-[#FFFFFFF66] placeholder:text-xl placeholder:font-semibold"
      />
      <div className="w-[50px] h-[50px] rounded-full bg-[#363738] flex items-center justify-center cursor-pointer">
        <LuSendHorizonal className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Form;
