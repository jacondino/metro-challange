import { LinkQuestion } from "@/components/LinkQuestion";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[50px] m-4">Choose a Question:</h1>
      <LinkQuestion number={1} />
      <LinkQuestion number={2} />
      <LinkQuestion number={3} />
      <LinkQuestion number={4} />
      <LinkQuestion number={5} />
      <LinkQuestion number={6} />
      <LinkQuestion number={7} />
    </div>
  );
}
