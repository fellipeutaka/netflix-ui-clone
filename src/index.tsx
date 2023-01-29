import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ReactQueryProvider } from "./lib/reactQuery";
import { GlobalStyles } from "./styles/GlobalStyles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <GlobalStyles />
      <App />
    </ReactQueryProvider>
  </StrictMode>
);
