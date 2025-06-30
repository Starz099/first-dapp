import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Connection, PublicKey } from "@solana/web3.js";

import Airdrop  from './Airdrop'
import TransactionBox from './SendTransaction';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader, 
  CardTitle,
} from "@/components/ui/card";

const sol_address = import.meta.env.VITE_SOLANA_ADDRESS;

export default function App() {
  return (
    <ConnectionProvider endpoint={sol_address}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex flex-col gap-6 items-center justify-center min-h-svh">
            <CardTitle>
              <WalletMultiButton className=""></WalletMultiButton>
            </CardTitle>
            {/* airdrop */}
            <Card className="px-4 flex w-1/2 ">
              <CardTitle>
                Send Airdrop to the connected account
              </CardTitle>
              <div></div>
              <Airdrop></Airdrop>
            </Card>

            {/* send transaction */}
            <Card className="px-4 flex w-1/2 ">
              <CardTitle>
                Send Transaction on Solana Devnet
              </CardTitle>
              <div></div>
              <TransactionBox></TransactionBox>
            </Card>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}