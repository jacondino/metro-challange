import { HomeButton } from "@/components/HomeButton";

export default function Five() {
  function findSafeFloor(floor = 14, increment = 14) {
    if (dropEgg(floor)) {
      return findLinear(floor - increment + 1, floor - 1);
    }

    if (floor + increment <= 100) {
      return findSafeFloor(floor + increment - 1, increment - 1);
    }

    return floor;
  }

  function findLinear(start: number, end: number) {
    for (let floor = start; floor <= end; floor++) {
      if (dropEgg(floor)) {
        return floor - 1;
      }
    }

    return end;
  }

  function dropEgg(floor: number) {
    const threshold = 57;
    return floor > threshold;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <HomeButton />
      <h1 className="text-[20px] m-4 w-1/2">
        5 - A building has 100 floors. One of the floors is the highest floor an
        egg can be dropped from without breaking. If an egg is dropped from
        above that floor, it will break. If it is dropped from that floor or
        below, it will be completely undamaged and you can drop the egg again.
        Given two eggs, find the highest floor an egg can be dropped from
        without breaking, with as few drops as possible in the worst-case
        scenario.
      </h1>
      <p>threshold = 57</p>
      <p>floor = 14</p>
      <p>increment = 14</p>
      Output: {findSafeFloor()}
    </div>
  );
}
