"use client";

import { ConnectKitProvider } from "connectkit";
import { useEffect, useState } from "react";
import * as viem from "viem";
import { WagmiConfig } from "wagmi";

import { config } from "@/src/config/wagmi";
import { useSilanceENS } from "../hooks/useSilenceENS";

export function Providers({ children }: { children: React.ReactNode }) {
  useSilanceENS();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (typeof window != "undefined") {
    (window as any).viem = viem;
  }

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{mounted && children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
