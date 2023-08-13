import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import backArrow from "../public/arrow-round.svg";
import Image from "next/image";
import { PATHS } from '../utils/constants';

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
    <div className="flex flex-col w-1/5 min-w-fit max-w-xs bg-reseda_green pr-2 pt-1">
      {currentPage !== "/" ? (
        <button
          className="animate-slide-in bg-champagne_pink text-reseda_green flex items-center gap-2 btn btn-primary rounded-r-lg p-1"
          onClick={() => handleClick(PATHS.home)}
        >
          <Image className="w-8 left-0 pl-2" src={backArrow} alt="Back" />
          <span className="font-sans font-bold text-xl">Home</span>
        </button>
      ) : (
        <span className="p-1 left-0 font-sans font-bold text-xl text-center bg-sage text-white">Projects</span>
      )}
      <div className="transition-all flex justify-start flex-col p-2">
        <button
          className={`rounded py-1 ${
            currentPage === PATHS.operations && "bg-sage text-white"
          }`}
          name="/operations"
          onClick={() => handleClick("/operations")}
        >
          Operations page
        </button>
      </div>
    </div>
  );
};

export default Plugins;
