import "../styles/globals.css";
import { Source_Code_Pro } from "next/font/google";
const sourceCodeProFont = Source_Code_Pro({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={sourceCodeProFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
