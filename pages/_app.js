import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";
import ReactGA from 'react-ga';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    ReactGA.pageview('/');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
