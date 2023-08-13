import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
  callback: (e: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ children, callback }: Props) => {
  return (
    <button
      className="h-10 w-14 text-center outline-none border-none bg-sage rounded-full transition ease-in-out delay-150 hover:scale-110 hover:bg-ash_gray duration-30"
      onClick={callback}
    >
      {children}
    </button>
  );
};

export default Button;
