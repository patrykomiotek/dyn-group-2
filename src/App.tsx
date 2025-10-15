import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

import { router } from "./routes";

import { store } from "./store";
import { AuthProvider } from "./shared/components/Auth/AuthContext";
import { SampleComponent } from "./shared/components/SampleComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <SampleComponent />
    // <Provider store={store}>
    // <div className="p-4">
    //   {/* <AuthContext> */}

    //   <QueryClientProvider client={queryClient}>
    //     <RouterProvider router={router} />
    //     <ToastContainer />
    //     <ReactQueryDevtools initialIsOpen={true} />
    //   </QueryClientProvider>
    // </div>
    // </Provider>
  );
}

export default App;
