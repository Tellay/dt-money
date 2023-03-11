import Logo from "../Logo";
import Cards from "../Cards";

import { PlusCircle } from "phosphor-react";

interface Props {
  openModal: () => void;
}

const Header: React.FC<Props> = ({ openModal }) => {
  const handleClick = () => {
    openModal();
  }

  return (
    <header className="relative py-10 px-4 sm:px-10 2xl:px-60 h-[212px] bg-bgSecundary flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <Logo />

        <button 
          className="bg-btnPrimary hover:bg-btnPrimaryHover transition-colors py-3 px-3 sm:px-5 rounded-md font-bold text-base text-white"
          onClick={handleClick}
        >
          <PlusCircle 
            size={32} 
            className="sm:hidden"
          />
          <span className="hidden sm:block">Nova transação</span>
        </button>
      </div>

      <Cards />
    </header>
  );
};

export default Header;
