import { useEffect, useState } from "react";

import { useTransactions } from "../../hooks/useTransactions";

import Card from "../Card";

function Cards() {
  const { incomes, outcomes, total } = useTransactions();

  const [incomesValue, setIncomesValue] = useState<number>(0);
  const [outcomesValue, setOutcomesValue] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    setIncomesValue(incomes);
    setOutcomesValue(outcomes);
    setTotalValue(incomes - outcomes !== 0 ? incomes - outcomes : total );
  }, [incomes, outcomes, total]);

  return (
    <div className="mt-4 sm:mt-14 h-full flex flex-col lg:flex-row items-center gap-8">
      <Card type="Income" title={"Entradas"} value={incomesValue} />

      <Card type="Outcome" title={"Saídas"} value={outcomesValue} />

      <Card type="Total" title={"Total"} value={totalValue} />
    </div>
  );
}

export default Cards;
