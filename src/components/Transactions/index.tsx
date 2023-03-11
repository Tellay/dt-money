import React from "react";
import { useTransactions } from "../../hooks/useTransactions";

import { TagSimple, CalendarBlank } from "phosphor-react";

import Value from "../Value";

const Transactions: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <div className="my-6 px-4 sm:px-10 2xl:px-60">
      <div className="overflow-auto hidden lg:block">
        {transactions.length > 0 ? (
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="px-8 py-5 text-textSecundary font-normal text-left">
                  Título
                </th>
                <th className="w-[200px] px-8 py-5 text-textSecundary font-normal text-left">
                  Valor
                </th>
                <th className="w-60 px-8 py-5 text-textSecundary font-normal text-left">
                  Categoria
                </th>
                <th className="w-[92px] px-8 py-5 text-textSecundary font-normal text-left">
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr className="bg-cardTertiary" key={transaction.id}>
                  <td className="py-5 px-8 text-textSecundary text-left rounded-l-[5px]">
                    {transaction.title}
                  </td>
                  <td
                    className={`py-5 px-8 ${
                      transaction.type === "income"
                        ? "text-btnPrimary"
                        : "text-textTertiary"
                    } text-left`}
                  >
                    <Value value={transaction.value} />
                  </td>
                  <td className="py-5 px-8 text-textSecundary text-left">
                    {transaction.category}
                  </td>
                  <td className="py-5 px-8 text-textSecundary text-left rounded-r-[5px]">
                    {transaction.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-textSecundary">No transactions!</p>
        )}
      </div>

      {transactions.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 lg:hidden">
          {transactions.map((transaction) => (
            <div
              className="bg-cardTertiary p-6 rounded-[5px] hover:shadow-yellow-200"
              key={transaction.id}
            >
              <div className="text-textSecundary truncate">
                {transaction.title}
              </div>
              <div
                className={`mt-[12px] font-bold text-xl ${
                  transaction.type === "income"
                    ? "text-btnPrimary"
                    : "text-textTertiary"
                }`}
              >
                <Value value={transaction.value} />
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between mt-4 ">
                <div className="flex items-center gap-2 text-iconPrimary truncate">
                  <TagSimple size={16} />
                  {transaction.category}
                </div>
                <div className="flex items-center gap-2 text-iconPrimary">
                  <CalendarBlank size={16} />
                  {transaction.createdAt}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-textSecundary lg:hidden">No transactions!</p>
      )}
    </div>
  );
};

export default Transactions;
