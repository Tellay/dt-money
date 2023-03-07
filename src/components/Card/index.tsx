import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

interface Props {
  type: "Income" | "Outcome" | "Total";
  title: String;
  value: Number;
}

const Card: React.FC<Props> = ({ type, title, value }) => {
  return (
    <div className={`w-full flex flex-col ${type === "Total" ? "bg-cardSecundary" : "bg-cardPrimary"} py-8 px-8 rounded-md`}>
      <div className="flex justify-between items-start">
        <span className="text-textSecundary">{title}</span>
        {type === "Income" && (
          <ArrowCircleUp 
            size={32}
            color="var(--btn-primaryHover)"
          />
        )}

        {type === "Outcome" && (
          <ArrowCircleDown 
            size={32}
            color="var(--text-tertiary)"
          />
        )}

        {type === "Total" && (
          <CurrencyDollar 
            size={32}
            color="white"
          />
        )}
      </div>

      <strong className="mt-[12px] font-bold text-textPrimary text-[32px] truncate">
        {
          value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }
      </strong>
    </div>
  );
};

export default Card;
