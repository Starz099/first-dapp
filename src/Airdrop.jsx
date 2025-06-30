import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import{
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./components/ui/card"
import { useEffect, useState } from "react";
import { Connection } from "@solana/web3.js";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  function updateAmount (e) {
    setAmount(e.target.value)
  }

  async function sendAirdrop () {
    await connection.requestAirdrop(wallet.publicKey, amount*1e9);
    alert("airdropped");
  }
  
  useEffect(
    () => {
      async function getBalance() {
        const accInfo = await connection.getAccountInfo(wallet.publicKey);
        setBalance(accInfo.lamports/ 1e9);
        console.log(accInfo);
      };
      getBalance();
    }, [wallet.publicKey]
  );
  

  return (
    <>
      <CardTitle>
        Balance : {balance}
      </CardTitle>
      <Input type="text" placeholder="Amount" className="" onChange={updateAmount}/>
      <Button onClick={sendAirdrop} className="cursor-pointer">Send Airdrop</Button>
    </>
  );
}