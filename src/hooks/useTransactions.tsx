import { createContext, useContext, useEffect, useState } from "react";

interface TransactionsContextProps {
  transactions: Transaction[];
  addTransiction: (transaction: Transaction) => void;
}

interface Transaction {
    id: number;
    title: string;
    type: string;
    value: number;
    category: string;
    createdAt: string;
}

interface Props {
  children: React.ReactNode;
}

const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

// create provider
export const TransactionsProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const transactions = [
      {
        id: 1,
        title: "Desenvolvimento de site",
        type: "income",
        value: 12000,
        category: "Venda",
        createdAt: "13/04/2022",
      },

      {
        id: 2,
        title: "Hamburguer",
        type: "outcome",
        value: -59,
        category: "Alimentação",
        createdAt: "10/04/2022",
      },

      {
        id: 3,
        title: "Aluguel do apartamento",
        type: "outcome",
        value: -1200,
        category: "Casa",
        createdAt: "27/03/2022",
      },

      {
        id: 4,
        title: "Computador",
        type: "income",
        value: 5400,
        category: "Venda",
        createdAt: "15/03/2022",
      },

      {
        id: 5,
        title: "Desenvolvimento de site",
        type: "income",
        value: 8000,
        category: "Venda",
        createdAt: "13/03/2022",
      },
    ];

    setTransactions(transactions);
  }, []);

  const addTransiction = (transaction: Transaction) => {
    console.log("Adicionar transação!", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransiction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
