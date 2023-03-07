import Logo from "../Logo";
import Cards from "../Cards";

interface Props {
  openModal: () => void;
}

const Header: React.FC<Props> = ({ openModal }) => {
  const handleClick = () => {
    openModal();
  }

  return (
    <header className="relative py-10 px-4 sm:px-10 2xl:px-60 h-[212px] bg-bgSecundary flex flex-col">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <Logo />

        <button 
          className="bg-btnPrimary hover:bg-btnPrimaryHover w-full sm:w-fit transition-colors mt-4 sm:mt-0 py-3 px-5 rounded-md font-bold text-base text-white"
          onClick={handleClick}
        >
          Nova transação
        </button>
      </div>

      <Cards />
    </header>
  );
};

export default Header;
