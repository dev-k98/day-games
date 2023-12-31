import React, { useRef, useState } from "react";
import Box from "../../components/UI/Box";
import Button from "../../components/UI/Button";

type Props = {};
type inputStateType = {
  0: number;
  1: number;
};

const initialInputState: inputStateType = {
  0: 0,
  1: 0,
};

const calculate = (inputA: number, inputB: number, sign: string) => {
  if (sign === "+") {
    return Number(inputA) + Number(inputB);
  } else if (sign === "-") {
    return inputA - inputB;
  } else if (sign === "*") {
    return inputA * inputB;
  } else {
    return Number((inputA / inputB).toFixed(3));
  }
};

const Operations = (props: Props) => {
  const [total, setTotal] = useState<number>(0);
  const [input, setInput] = useState<inputStateType>(initialInputState);
  const [sign, setSign] = useState<string>("+");
  const ref = useRef<HTMLDivElement>(null);

  const handleOperation = (e: React.MouseEvent<HTMLElement>) => {
    if (!!ref.current) ref.current.innerHTML = e.currentTarget.innerHTML;
    setSign(e.currentTarget.innerHTML);
  };

  const handleEqual = () => {
    const newTotal = calculate(input[0], input[1], sign);
    setTotal(newTotal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const input = e.target.value;
    setInput((prev) => {
      return { ...prev, [i]: input };
    });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-custom_french_gray">
      <div className="h-56 w-96 flex justify-center items-center flex-col bg-custom_slate_gray rounded-lg shadow-inner shadow-custom_seasalt">
        <Box>
          <input
            className="font-Lato h-10 w-10 bg-custom_seasalt text-center outline-none border-none hover:bg-custom_anti_flash_white  focus:bg-custom_french_gray "
            value={input[0] || ""}
            onChange={(e) => handleChange(e, 0)}
          />
          <div
            className="font-Lato h-10 w-10 flex justify-center items-center text-4xl text-white"
            ref={ref}
          >
            {sign}
          </div>
          <input
            className="font-Lato h-10 w-10 bg-custom_seasalt text-center outline-none border-none hover:bg-custom_anti_flash_white focus:bg-custom_french_gray"
            value={input[1] || ""}
            onChange={(e) => handleChange(e, 1)}
          />
        </Box>
        <Box style="gap-2 text-custom_eerie_black text-2xl font-Lato">
          <Button callback={handleOperation}>+</Button>
          <Button callback={handleOperation}>-</Button>
          <Button callback={handleOperation}>*</Button>
          <Button callback={handleOperation}>/</Button>
        </Box>
        <Box>
          <Box>
            <button
              className="h-10 w-20 text-center outline-none border-none bg-custom_eerie_black text-custom_seasalt rounded-lg"
              onClick={handleEqual}
            >
              Total
            </button>
          </Box>
          <Box style="flex items-center text-custom_eerie_black text-xl">
            <h2>{total}</h2>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Operations;
