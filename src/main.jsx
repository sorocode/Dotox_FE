import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

// 서비스 워커 시작
if (import.meta.env.MODE === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  // </React.StrictMode>
);
