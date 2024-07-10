import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
