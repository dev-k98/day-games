import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { generateNewPassword } from "../../utils/passwordGenerator";
import { options } from "@/utils/types";
import { INITIAL_STATE_OPTIONS } from "../../utils/constants";

type Props = {};

const Password = (props: Props) => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(8);
  const [passwordOptions, setOptions] = useState<options>(
    INITIAL_STATE_OPTIONS
  );

  const isAllUnchecked = useCallback(() => {
    const arr = Object.keys(passwordOptions).filter((item) => {
      const key = item as keyof typeof INITIAL_STATE_OPTIONS;
      return passwordOptions[key];
    });
    if (!arr.length)
      setOptions((prev) => {
        return { ...prev, lowercase: true };
      });
  }, [passwordOptions]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value));
  };

  const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const changedOption = e.target.name as keyof typeof INITIAL_STATE_OPTIONS;
    setOptions((prev) => {
      return { ...prev, [changedOption]: !passwordOptions[changedOption] };
    });
  };

  useEffect(() => {
    const newPassword = generateNewPassword(length, passwordOptions);
    setPassword(newPassword);
  }, [length, passwordOptions]);

  useEffect(() => {
    isAllUnchecked();
  }, [passwordOptions, isAllUnchecked]);

  return (
    <div className="flex justify-center items-center w-screen bg-custom_platinum">
      <div className="flex justify-center items-center flex-col bg-white p-5 rounded-xl shadow-gray-400 shadow-lg">
        <h1 className="font-Roboto ">Password</h1>
        <div className="flex justify-center items-center flex-col bg-white font-Roboto py-4">
          <h1>Password Generator</h1>
          <p>
            Create strong and secure passwords to keep your account safe online.
          </p>
        </div>
        <div className="py-2">
          <div className="flex justify-center items-center gap-3">
            <p className="h-8 p-1 w-64 bg-custom_platinum rounded-lg overflow-hidden bg-scroll">
              {password}
            </p>
            <button>copy</button>
          </div>
          <p>weak</p>
        </div>
        <div>
          <div className="flex">
            <p>Password length</p>
            <input onChange={handleChange}></input>
          </div>
          <div>
            <ul>
              <li>
                Uppercase
                <input
                  name="uppercase"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.uppercase}
                ></input>
              </li>
              <li>
                Lowercase
                <input
                  name="lowercase"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.lowercase}
                ></input>
              </li>
              <li>
                Numbers
                <input
                  name="numbers"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.numbers}
                ></input>
              </li>
              <li>
                sp Chars
                <input
                  name="spChars"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.spChars}
                ></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

type T = keyof typeof INITIAL_STATE_OPTIONS;

export default Password;
