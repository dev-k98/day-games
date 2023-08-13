import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: string;
};

const Box = ({ children, style }: Props) => {
  return (
    <div className={`p-1 flex justify-evenly ${style}`}>{children}</div>
  );
};

export default Box;
