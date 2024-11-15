import { HomeButton } from "@/components/HomeButton";

export default function One() {
  const arr = [2, 1, 2, 3, 4, 3, 5, 2, 6, 4, 4, 4];

  interface FindDuplicates {
    (arr: number[]): number[];
  }

  const findDuplicates: FindDuplicates = (arr) => {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

    return [...new Set(duplicates)];
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <HomeButton />
      <h1 className="text-[20px] m-4">
        1 - Write a javascript function that finds the duplicate items in any
        given array.
      </h1>
      <p>Input: [2, 1, 2, 3, 4, 3, 5, 2, 6, 4, 4, 4]</p>
      <p>Output: [{findDuplicates(arr).join(",")}]</p>
    </div>
  );
}
