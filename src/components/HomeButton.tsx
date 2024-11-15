import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link
      href="/"
      className="fixed top-5 left-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
    >
      Home
    </Link>
  );
};
