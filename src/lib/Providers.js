"use client";

import { persistor, store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTopBtn from "@/components/ScrollToTop/ScrollToTop";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

export default function Providers({ children }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <ScrollToTopBtn />
        <Toaster position="top-right" richColors duration={1800} />
        <NextTopLoader
          color="#0DB760"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={300}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
      </PersistGate>
    </ReduxProvider>
  );
}
