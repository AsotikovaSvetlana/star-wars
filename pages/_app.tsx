import React, { Provider } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import { AppContext, initialState } from "@/src/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
