import { useState } from "react";
import { NavBar } from "../NavBar/index";
import { SideBar } from "../SideBar/index";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen p-0">
      <NavBar handleClick={() => setIsSidebarOpen(true)} />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
