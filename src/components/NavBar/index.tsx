import { BurguerIcon } from "./BurguerIcon";
import logo from "./beka-light.png";

type Props = {
  handleClick: () => void;
};

export const NavBar = ({ handleClick }: Props) => {
  return (
    <div className="w-full h-16 bg-blue-600 shadow-lg px-2 flex items-center justify-between">
      <div
        className="outline-none bg-transparent w-auto h-auto"
        onClick={handleClick}
      >
        <BurguerIcon />
      </div>
      <img src={logo} alt="logo beka" className="w-20 h-auto object-cover" />
    </div>
  );
};
