import { Account } from "@/src/components/WagmiDefaults/Account";
import { Balance } from "@/src/components/WagmiDefaults/Balance";
import { BlockNumber } from "@/src/components/WagmiDefaults/BlockNumber";
import { ConnectKitButton } from "@/src/components/WagmiDefaults/ConnectKitButton";
import { Connected } from "@/src/components/WagmiDefaults/Connected";
import { NetworkSwitcher } from "@/src/components/WagmiDefaults/NetworkSwitcher";
import { ReadContract } from "@/src/components/WagmiDefaults/ReadContract";
import { ReadContracts } from "@/src/components/WagmiDefaults/ReadContracts";
import { ReadContractsInfinite } from "@/src/components/WagmiDefaults/ReadContractsInfinite";
import { SendTransaction } from "@/src/components/WagmiDefaults/SendTransaction";
import { SendTransactionPrepared } from "@/src/components/WagmiDefaults/SendTransactionPrepared";
import { SignMessage } from "@/src/components/WagmiDefaults/SignMessage";
import { SignTypedData } from "@/src/components/WagmiDefaults/SignTypedData";
import { Token } from "@/src/components/WagmiDefaults/Token";
import { WatchContractEvents } from "@/src/components/WagmiDefaults/WatchContractEvents";
import { WatchPendingTransactions } from "@/src/components/WagmiDefaults/WatchPendingTransactions";
import { WriteContract } from "@/src/components/WagmiDefaults/WriteContract";
import { WriteContractPrepared } from "@/src/components/WagmiDefaults/WriteContractPrepared";

export function Page() {
  return (
    <>
      <h1>wagmi + ConnectKit + Next.js</h1>

      <ConnectKitButton />

      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected>
    </>
  );
}

export default Page;
