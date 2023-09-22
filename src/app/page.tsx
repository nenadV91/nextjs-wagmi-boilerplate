import { ConnectKitButton } from "@/src/components/WagmiDefaults/ConnectKitButton";
import { Connected } from "@/src/components/WagmiDefaults/Connected";

export function Page() {
  return (
    <>
      <ConnectKitButton />
      <Connected>Foo</Connected>
    </>
  );
}

export default Page;
