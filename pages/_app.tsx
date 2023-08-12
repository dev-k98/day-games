import type { AppProps } from "next/app";
import Plugins from "../components/Plugins";
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative flex flex-column">
      <Plugins />
      <Component {...pageProps} />
    </div>
  );
}
