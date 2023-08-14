import React from "react";

type Props = {};

const Analyser = (props: Props) => {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col gap-3">
      <div className="h-24 w-3/4 flex justify-evenly items-center rounded-xl bg-custom_anti_flash_white font-Poppins text-cerulean">
        <span className="flex justify-center items-center flex-col">
          <label>Words</label>
          <p className="font-Oswald">0</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Characters</label>
          <p className="font-Oswald">0</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Sentences</label>
          <p className="font-Oswald">0</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Paragraphs</label>
          <p className="font-Oswald">0</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Pronouns</label>
          <p className="font-Oswald">0</p>
        </span>
      </div>
      <textarea className="p-2 h-80 w-3/4 flex justify-evenly items-center rounded-sm bg-slate-100 font-Poppins resize-none">Test</textarea>
      <div className="h-24 w-3/4 flex justify-evenly items-center rounded-xl bg-honeydew font-Poppins text-cerulean">Test</div>
    </div>
  );
};

export default Analyser;
