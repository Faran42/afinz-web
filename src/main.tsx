import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./contexts/AppContext.tsx";
import { UIProvider } from "./contexts/UIContext.tsx";
import { GlobalUIHandler } from "./ui/GlobalUIHandler.tsx";
import { TransferProvider } from "./contexts/TransferContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <UIProvider>
          <TransferProvider>
            <App />
            <GlobalUIHandler />
          </TransferProvider>
        </UIProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
