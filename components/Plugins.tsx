import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Plugins = (props: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="fixed flex justify-start flex-col min-h-full w-1/5 min-w-fit bg-neutral-800 p-3 text-neutral-100">
      {router.pathname !== "/" && (
        <button className="bg-green-700 btn btn-primary rounded-full p-2 left-0 font-sans" onClick={handleClick}>
          Home <img></img>
        </button>
      )}
      <div></div>
      <Link href="/operations" id="operations">
        Operations page
      </Link>
    </div>
  );
};

export default Plugins;
