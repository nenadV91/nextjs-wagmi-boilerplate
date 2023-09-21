import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";

const walletConnectProjectId = "";

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "My wagmi + ConnectKit App",
    walletConnectProjectId,
  })
);
