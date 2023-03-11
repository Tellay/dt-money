import { createContext, useContext, useEffect, useState } from "react";

interface TransactionsContextProps {
  incomes: number;
  outcomes: number;
  total: number;
  transactions: Transaction[];
  addTransiction: (transaction: Transaction) => void;
}

interface Transaction {
  id: string;
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

export const TransactionsProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [incomes, setIncomes] = useState<number>(0);
  const [outcomes, setOutcomes] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const initialTransactions = [
    {
      id: "1",
      title: "Desenvolvimento de site",
      type: "income",
      value: 12000,
      category: "Venda",
      createdAt: "13/04/2022",
    },

    {
      id: "2",
      title: "Hamburguer",
      type: "outcome",
      value: -59,
      category: "Alimentação",
      createdAt: "10/04/2022",
    },

    {
      id: "3",
      title: "Aluguel do apartamento",
      type: "outcome",
      value: -1200,
      category: "Casa",
      createdAt: "27/03/2022",
    },

    {
      id: "4",
      title: "Computador",
      type: "income",
      value: 5400,
      category: "Venda",
      createdAt: "15/03/2022",
    },

    {
      id: "5",
      title: "Desenvolvimento de site",
      type: "income",
      value: 8000,
      category: "Venda",
      createdAt: "13/03/2022",
    },
  ];

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("transactions") || JSON.stringify({ "incomes": 25400, "outcomes": -1141, "total": 25400+(-1141), transactions: initialTransactions }));
    const { transactions, incomes, outcomes, total } = storedData;
    
    setTransactions(transactions);
    setIncomes(incomes);
    setOutcomes(outcomes);
    setTotal(total);
  }, []);

  useEffect(() => {
    if(transactions.length === 0) return;
    localStorage.setItem("transactions", JSON.stringify({ "incomes": incomes, "outcomes": outcomes, "total": total, transactions: transactions }));
  }, [transactions])

  const addTransiction = (transaction: Transaction) => {
    setTransactions((oldTransactions) => [...oldTransactions, transaction]);
    if(transaction.type === "income") {
      setTotal(total + transaction.value);
      setIncomes(incomes + transaction.value);
    } else {
      setTotal(total - transaction.value);
      setOutcomes(outcomes + transaction.value);
    }
  }

  return (
    <TransactionsContext.Provider value={{ incomes, outcomes, total, transactions, addTransiction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
