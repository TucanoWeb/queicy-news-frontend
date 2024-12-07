import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

// Tailwind css
import "./tailwind.css";

// Router
import RouterComponent from "./router/index";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </Suspense>
  </StrictMode>
);
