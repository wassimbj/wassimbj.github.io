import "../styles/globals.css";
import "nprogress/nprogress.css";
import { Inter } from "next/font/google";
import NProgress from "nprogress";
import { useEffect } from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`${inter.variable} min-h-screen bg-warmPaper text-ink`}>
      <Component {...pageProps} />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </main>
  );
}

export default MyApp;
