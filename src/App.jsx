import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import Airdrop  from './Airdrop'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sol_address = import.meta.env.VITE_SOL_ENDPOINT;

export default function App() {
  return (
    <ConnectionProvider endpoint={sol_address}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex flex-col gap-6 items-center justify-center min-h-svh">
            <Card className="px-4 flex w-1/2 ">
              <CardTitle>
                <WalletMultiButton className=""></WalletMultiButton>
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
              <Airdrop></Airdrop>
            </Card>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}