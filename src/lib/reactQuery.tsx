import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api } from "./axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey, signal }) => {
        const { data } = await api.get(String(queryKey[0]), { signal });
        return data;
      },
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
