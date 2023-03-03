import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import {GrReactjs} from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";

export const LIST_SECTIONS = [
  {
    id: "home",
    name: "Home",
    icon: <AiFillHome color="#fff" />,
    url: "/",
  },
  {
    id: "learnJS",
    name: "Aprende JS",
    icon: <IoLogoJavascript color="#fff" />,
    url: "/learnJS",
  },
  {
    id: "learnReact",
    name: "Aprende React",
    icon: <GrReactjs color="#fff" />,
    url: "/learnReact",
  },
  {
    id: "about",
    name: "About",
    icon: <AiOutlineInfoCircle color="#fff" />,
    url: "/about",
  },
];
