import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

const Search: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <form 
      className="px-4 sm:px-10 2xl:px-60 mx-auto w-full flex gap-4 mt-[438px] lg:mt-32"
    >
      <input
        className="bg-bgSecundary border-[1px] border-transparent focus:border-btnPrimary transition-colors rounded-md p-4 w-full text-white outline-0"
        type="text"
        placeholder="Busque uma transação"
      />

      <button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="bg-transparent flex items-center gap-3 border-[1px] border-btnPrimaryHover py-[17px] px-[17px] sm:px-8 rounded-md font-bold text-btnPrimaryHover hover:bg-btnPrimary hover:border-btnPrimary transition-colors hover:text-white"
      >
        <MagnifyingGlass
          size={20}
          weight="bold"
          color={isHovering ? "white" : "var(--btn-primaryHover)"}
        />

        <span className="hidden sm:block">
          Buscar
        </span>
      </button>
    </form>
  );
};

export default Search;
