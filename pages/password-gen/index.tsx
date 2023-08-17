import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { generateNewPassword } from "../../utils/passwordGenerator";
import { options } from "@/utils/types";
import { INITIAL_STATE_OPTIONS } from "../../utils/constants";

type Props = {};

const Password = (props: Props) => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(8);
  const [copied, setCopied] = useState<boolean>(false);
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const getNewPassword = useCallback(() => {
    const newPassword = generateNewPassword(length, passwordOptions);
    setPassword(newPassword);
  }, [length, passwordOptions, setPassword]);

  useEffect(() => {
    getNewPassword();
  }, [getNewPassword]);

  useEffect(() => {
    isAllUnchecked();
  }, [passwordOptions, isAllUnchecked]);

  return (
    <div className="flex justify-center items-center w-screen bg-custom_platinum">
      <div className="flex justify-center items-center flex-col bg-white p-5 rounded-xl shadow-gray-400 shadow-lg">
        <div className="flex justify-center items-center flex-col bg-white font-Roboto py-4">
          <p className="font-Montserrat text-xl">Password Generator</p>
          <p className="font-Montserrat text-sm">
            Create strong and secure passwords to keep your account safe online.
          </p>
        </div>
        <div className="py-2">
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-between">
              <p className="h-8 p-1 w-64 bg-custom_platinum rounded-lg overflow-hidden bg-scroll text-center">
                {password}
              </p>
              <button onClick={getNewPassword}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="#5d5d5d"
                >
                  <path d="M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-99q0-13 8.5-21.5T770-800q13 0 21.5 8.5T800-770v194q0 13-8.5 21.5T770-546H576q-13 0-21.5-8.5T546-576q0-13 8.5-21.5T576-606h138q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q75 0 140-39.5T717-366q5-11 16.5-16.5t22.5-.5q12 5 16 16.5t-1 23.5q-39 84-117.5 133.5T480-160Z" />
                </svg>
              </button>
            </div>
            <button
              className="rounded-lg p-2 bg-custom_orange_web"
              onClick={handleCopy}
            >
              copy
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-3 py-4 items-center">
            <p className="font-Montserrat text-custom_oxford_blue">
              Password length
            </p>
            <input
              onChange={handleChange}
              placeholder="A number here"
              className="h-8 bg-custom_platinum outline-none border-none p-2 rounded-lg"
            ></input>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-1 w-full">
              <li className="p-1 px-2 font-Montserrat text-center text-custom_orange_web rounded-lg flex justify-between bg-custom_oxford_blue">
                Uppercase
                <input
                  name="uppercase"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.uppercase}
                ></input>
              </li>
              <li className="p-1 px-2 font-Montserrat text-center text-custom_orange_web rounded-lg flex justify-between bg-custom_oxford_blue">
                Lowercase
                <input
                  name="lowercase"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.lowercase}
                ></input>
              </li>
              <li className="p-1 px-2 font-Montserrat text-center text-custom_orange_web rounded-lg flex justify-between bg-custom_oxford_blue">
                Numbers
                <input
                  name="numbers"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.numbers}
                ></input>
              </li>
              <li className="p-1 px-2 font-Montserrat text-center text-custom_orange_web rounded-lg flex justify-between bg-custom_oxford_blue">
                sp Chars
                <input
                  name="spChars"
                  type="checkbox"
                  onChange={handleCheckChange}
                  checked={passwordOptions.spChars}
                ></input>
              </li>
            </div>
          </div>
        </div>
      </div>
      {copied && (
        <div
          className="animate-drop-down bg-green-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 py-3 shadow-md absolute top-2"
          role="alert"
        >
          <div className="flex justify-between items-center ">
            <div className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="green"
              >
                <path d="m421-389-98-98q-9-9-22-9t-23 10q-9 9-9 22t9 22l122 123q9 9 21 9t21-9l239-239q10-10 10-23t-10-23q-10-9-23.5-8.5T635-603L421-389Zm59 309q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Password copied</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type T = keyof typeof INITIAL_STATE_OPTIONS;

export default Password;
