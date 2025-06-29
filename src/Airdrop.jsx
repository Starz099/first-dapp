import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./components/ui/button";

import { Input } from "@/components/ui/input";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdrop () {
    await connection.requestAirdrop(wallet.publicKey, 10000)
    alert("airdropped")
  }

  return (
    <>
      <Input type="text" placeholder="Amount" className=""/>
      <Button onClick={sendAirdrop}>Send Airdrop</Button>
    </>
  );
}