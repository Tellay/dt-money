import { useState } from "react";

import { TransactionsProvider } from "./hooks/useTransactions";

import Header from "./components/Header";
import Search from "./components/Search";
import Transactions from "./components/Transactions";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex flex-col">
      <TransactionsProvider>
        <Header 
          openModal={() => handleModalOpen()} 
        />
        <Search />
        <Transactions />
        <Modal 
          isOpen={isModalOpen} 
          closeModal={() => handleModalClose()} 
        />
      </TransactionsProvider>
    </div>
  );
}

export default App;
