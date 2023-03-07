import Card from "../Card";

function Cards() {
  return (
    <div className="mt-4 sm:mt-14 h-full flex flex-col lg:flex-row items-center gap-8">
      <Card type="Income" title={"Entradas"} value={17400} />

      <Card type="Outcome" title={"Saídas"} value={1259} />

      <Card type="Total" title={"Total"} value={17400 - 1259} />
    </div>
  );
}

export default Cards;
