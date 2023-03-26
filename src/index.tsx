import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { ReactQueryProvider } from "./lib/reactQuery";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element is required");
}

createRoot(root).render(
  <StrictMode>
    <ReactQueryProvider>
      <GlobalStyles />
      <App />
    </ReactQueryProvider>
  </StrictMode>
);
