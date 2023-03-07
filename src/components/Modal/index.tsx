import { X as XIcon, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import { useState } from "react";

interface Props {
  isOpen: Boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, closeModal })=> {
  const [isHovering, setIsHovering] = useState<String>("");

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovering(e.currentTarget.name);
  }

  const handleMouseLeave = () => {
    setIsHovering("");
  }

  const handleCloseModal = () => {
    closeModal();
  }

  return isOpen && (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-4 bg-black bg-opacity-75">
      <form className="max-w-[535px] w-full mx-auto py-6 sm:py-10 px-7 sm:px-12 bg-bgPrimary rounded-md shadow-modalShadow ">
        <XIcon 
          onClick={handleCloseModal}
          className="ml-auto text-iconPrimary cursor-pointer" 
          size={24} 
        />

        <strong className="text-textPrimary font-bold text-2xl">
          Nova transação
        </strong>

        <div className="flex flex-col gap-4 mt-8">
          <input
            className="bg-bgSecundary p-4 border-[1px] border-transparent focus:border-btnPrimary transition-colors rounded-md text-white outline-0"
            type="text"
            placeholder="Descrição"
          />
          <input
            className="bg-bgSecundary p-4 border-[1px] border-transparent focus:border-btnPrimary transition-colors rounded-md text-white outline-0"
            type="text"
            placeholder="Preço"
          />
          <input
            className="bg-bgSecundary p-4 border-[1px] border-transparent focus:border-btnPrimary transition-colors rounded-md text-white outline-0"
            type="text"
            placeholder="Categoria"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
          <button
            name="income"
            className="flex justify-center items-center gap-2 w-full bg-cardTertiary py-4 px-[60px] text-textSecundary rounded-md hover:bg-btnPrimary transition-colors hover:text-white"
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <ArrowCircleUp
              className={`text-btnPrimaryHover ${isHovering === "income" ? "text-white" : "text-btnPrimary"} transition-colors`}
              size={24}
            />
            Entrada
          </button>
          <button 
            name="outcome"
            className="flex justify-center items-center gap-2 w-full bg-cardTertiary py-4 px-[60px] text-textSecundary rounded-md hover:bg-btnSecundaryHover transition-colors hover:text-white"
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={() => handleMouseLeave()}  
          >
            <ArrowCircleDown
              className={`text-textTertiary ${isHovering === "outcome" ? "text-white" : "text-textTertiary"} transition-colors`}
              size={24} 
            />
            Saída
          </button>
        </div>

        <button
          className="mt-10 w-full py-4 bg-btnPrimary rounded-md font-bold text-white hover:bg-btnPrimaryHover transition-colors"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Modal;
