import "../styles/globals.css";
import "nprogress/nprogress.css";
import { Source_Code_Pro } from "next/font/google";
const sourceCodeProFont = Source_Code_Pro({ subsets: ["latin"] });
import NProgress from "nprogress";
import { useEffect } from "react";

NProgress.configure({
  showSpinner: false,
})
function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <main className={sourceCodeProFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
