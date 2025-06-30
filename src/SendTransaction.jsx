import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export default function TransactionBox() {
  const wallet = useWallet();
  const { connection } = useConnection();
	
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");

  function updateAmount (e) {
    setAmount(e.target.value)	
  }

  function updateAddress (e) {
    setAddress(e.target.value)
  }

	async function sendTransaction() {
		const transaction = new Transaction();
		transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(address),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

		await wallet.sendTransaction(transaction, connection);
		alert("Sent " + amount + " SOL to " + address);
	}

  return (
    <>
      <Input type="text" placeholder="Amount" className="" onChange={updateAmount}/>
      <Input type="text" placeholder="To :" className="" onChange={updateAddress}/>
      <Button onClick={sendTransaction} className="cursor-pointer">Send</Button>
    </>
  );
}