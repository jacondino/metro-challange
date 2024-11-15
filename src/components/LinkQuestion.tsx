import Link from "next/link";

export const LinkQuestion = ({ number }: { number: number }) => {
  return (
    <Link href={`/question/${number}`}>
      <span className="border-2 border-white-500 bg-transparent p-4 text-center flex items-center justify-center rounded-lg mb-3">
        Question {number}
      </span>
    </Link>
  );
};
