import { ToggleProps } from "@/types";
import { RxHamburgerMenu } from "react-icons/rx";
type PropTypes = ToggleProps;
const Toggle = ({ toggleSidebar }: PropTypes) => {
  return (
    <div
      className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center cursor-pointer lg:hidden"
      onClick={toggleSidebar}
    >
      <RxHamburgerMenu className="text-white " size={22} />
    </div>
  );
};

export default Toggle;
