import { HomeButton } from "@/components/HomeButton";

export default function Seven() {
  function getMaxValue(carrotTypes: any, capacity: number) {
    carrotTypes.sort((a: any, b: any) => b.price / b.kg - a.price / a.kg);

    let totalValue = 0;

    for (const carrot of carrotTypes) {
      if (capacity === 0) break;

      if (capacity >= carrot.kg) {
        const weightToTake = Math.floor(capacity / carrot.kg) * carrot.kg;
        const valueToAdd = (weightToTake / carrot.kg) * carrot.price;

        totalValue += valueToAdd;
        capacity -= weightToTake;
      }
    }

    return totalValue;
  }

  const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 },
  ];
  const capacity = 36;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <HomeButton />
      <h1 className="text-[20px] m-4 w-1/2">
        {`7 - Think that you have an unlimited number of carrots, but a limited number of carrot
        types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
        weight and a price. Write a function that takes carrotTypes and capacity and return the
        maximum value the bag can hold. [Python or Javascript]
        Example:
        carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
        capacity = 36 //kg
        getMaxValue(carrotTypes, capacity)`}
      </h1>
      <div className="mb-4">
        Input:
        <p>
          {`CarrotTypes = [
            { kg: 5, price: 100 },
            { kg: 7, price: 150 },
            { kg: 3, price: 70 },
          ]
          `}
        </p>
        <p>Capacity = 36</p>
      </div>
      <p>
        <b>Output:</b> {getMaxValue(carrotTypes, capacity)}
      </p>
    </div>
  );
}
