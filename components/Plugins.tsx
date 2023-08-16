import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import backArrow from "../public/arrow-round.svg";
import Image from "next/image";
import { PATHS } from "../utils/constants";

type Props = {};

const Plugins = (props: Props) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>();
  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router]);

  const handleClick = (target: string) => {
    router.push(target);
  };

  return (
    <div className="flex flex-col w-1/5 min-w-fit max-w-xs bg-black pr-2 pt-1">
      {currentPage !== "/" ? (
        <button
          className="animate-slide-in bg-custom_orange_web text-custom_seasalt flex items-center gap-2 btn btn-primary rounded-r-lg p-1"
          onClick={() => handleClick(PATHS.home)}
        >
          <Image className="w-8 left-0 pl-2" src={backArrow} alt="Back" />
          <span className="font-Poppins font-bold text-xl">Home</span>
        </button>
      ) : (
        <span className="p-1 left-0 font-Poppins font-bold text-xl text-center bg-custom_onyx text-custom_seasalt">
          Projects
        </span>
      )}
      <div className="transition-all flex justify-start flex-col p-2 text-white font-Montserrat">
        <button
          className={`rounded p-1 ${
            currentPage === PATHS.operations && "bg-custom_seasalt text-custom_orange_web"
          }`}
          name={PATHS.operations}
          onClick={() => handleClick(PATHS.operations)}
        >
          Operations page
        </button>
        <button
          className={`rounded p-1 ${
            currentPage === PATHS.analyzer && "bg-custom_seasalt text-custom_orange_web"
          }`}
          name={PATHS.analyzer}
          onClick={() => handleClick(PATHS.analyzer)}
        >
          Text Analyzer
        </button>
        <button
          className={`rounded p-1 ${
            currentPage === PATHS.password && "bg-custom_seasalt text-custom_orange_web"
          }`}
          name={PATHS.password}
          onClick={() => handleClick(PATHS.password)}
        >
          Password Generator
        </button>
      </div>
    </div>
  );
};

export default Plugins;
