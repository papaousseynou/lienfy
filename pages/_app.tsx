import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../app/globals.css";

import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const shouldRenderFooter = () => {
    const noFooterRoutes = [
      "/login",
      "/signup",
      "/resetPassword",
      "/successReset",
    ];

    return !noFooterRoutes.includes(router.pathname);
  };

  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      {shouldRenderFooter() && <Footer />}
    </>
  );
}

export default MyApp;
