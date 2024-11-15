import { HomeButton } from "@/components/HomeButton";

export default function For() {
  function closeBrackets(str: string) {
    const stack = [];
    const open = "{[(";
    const close = "}])";
    const pairs: { [key: string]: string } = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

    for (const char of str) {
      if (open.includes(char)) {
        stack.push(char);
      } else if (close.includes(char)) {
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <HomeButton />
      <h1 className="text-[20px] m-4 w-1/2">{`4 - Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false`}</h1>
      <p>Input: {`{ [ ] }`}</p>
      <p>Output: {closeBrackets("{[]}") ? "TRUE" : "FALSE"}</p>
      <p>Input: {`{ ( ] ) }`}</p>
      <p>Output: {closeBrackets("{(])}") ? "TRUE" : "FALSE"}</p>
    </div>
  );
}
