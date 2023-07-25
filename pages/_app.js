// import "@/styles/globals.css";
// import "@/assets/scss/style.scss";
import "@/styles/style.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("../public/jquery.js");
  }, []);
  return <Component {...pageProps} />;
}
