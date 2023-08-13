import type { AppProps } from "next/app";
import Plugins from "../components/Plugins";
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="col-span-1 flex flex-column min-h-screen">
      <Plugins />
      <Component {...pageProps} />
    </div>
  );
}
