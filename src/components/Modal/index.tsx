import { X as XIcon, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useTransactions } from "../../hooks/useTransactions";

interface Props {
  isOpen: Boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, closeModal })=> {
  const { transactions, addTransiction } = useTransactions();
  const [isHovering, setIsHovering] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovering(e.currentTarget.name);
  }

  const handleMouseLeave = () => {
    setIsHovering("");
  }

  const handleCloseModal = () => {
    setTitle("");
    setValue(0);
    setCategory("");
    setType("");
    setError("");
    closeModal();
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(areInputsFilled()) {
      addTransiction({ id: uuid(), title, value, category, type, createdAt: new Date().toLocaleDateString() });
      return handleCloseModal();
    }
    
    setError("Preencha todos os campos!");
    setTimeout(() => {
      setError("");
    }, 1000);
  }

  const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!isNaN(Number(e.target.value))) {
      setValue(Number(e.target.value));
    }
  }

  const areInputsFilled = () => {
    if (title === "" || value === 0 || category === "" || type === "") {
      return false;
    } 

    return true;
  }

  return isOpen && (
    <div className="fixed inset-0 flex justify-center items-center px-4 bg-black bg-opacity-75">
      <form 
        className="max-w-[535px] w-full mx-auto py-7 sm:py-10 px-7 sm:px-12 bg-bgPrimary rounded-md shadow-modalShadow"
        onSubmit={handleSubmit}
      >
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
            className={`bg-bgSecundary p-4 border-[1px] ${error ? "border-btnSecundaryHover" : "border-transparent"} border-transparent  focus:border-btnPrimary transition-colors rounded-md text-white outline-0`}
            type="text"
            placeholder="Descrição"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className={`bg-bgSecundary p-4 border-[1px] ${error ? "border-btnSecundaryHover" : "border-transparent"} border-transparent focus:border-btnPrimary transition-colors rounded-md text-white outline-0`}
            type="text"
            placeholder="Preço"
            value={value || ""}
            onChange={(e) => handleInputNumberChange(e)}
          />
          <input
            className={`bg-bgSecundary p-4 border-[1px] ${error ? "border-btnSecundaryHover" : "border-transparent"} focus:border-btnPrimary transition-colors rounded-md text-white outline-0`}
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
          <button
            name="income"
            className={`flex justify-center items-center gap-2 w-full ${type === "income" ? "bg-btnPrimary text-white" : "bg-cardTertiary"} py-4 px-[60px] text-textSecundary rounded-md hover:bg-btnPrimary transition-colors hover:text-white`}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={(e) => setType(e.currentTarget.name)}
            type="button"
          >
            <ArrowCircleUp
              className={`${type === "income" ? "text-white" : "text-btnPrimaryHover"} ${isHovering === "income" ? "text-white" : "text-btnPrimary"} transition-colors`}
              size={24}
            />
            Entrada
          </button>
          <button 
            name="outcome"
            className={`flex justify-center items-center gap-2 w-full ${type === "outcome" ? "bg-btnSecundaryHover text-white" : "bg-cardTertiary"} py-4 px-[60px] text-textSecundary rounded-md hover:bg-btnSecundaryHover transition-colors hover:text-white`}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={() => handleMouseLeave()}  
            onClick={(e) => setType(e.currentTarget.name)}
            type="button"
          >
            <ArrowCircleDown
              className={`${type === "outcome" ? "text-white" : "text-textTertiary"} ${isHovering === "outcome" ? "text-white" : "text-textTertiary"} transition-colors`}
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
