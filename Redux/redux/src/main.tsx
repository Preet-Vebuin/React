import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "../src/store/movieStore.tsx"; // Import your Redux store
//import "./index.css";
//import store from "../src/store/store.tsx"; // for counter project 

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);