'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './index';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
}
