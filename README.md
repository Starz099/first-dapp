# 🧪 First Solana dApp

This is my first decentralized application (dApp) built on the **Solana blockchain** as a learning project. It demonstrates how to connect a wallet, request an airdrop of SOL (on Devnet), and send a transaction to another wallet.

> ⚠️ **Note:** This dApp currently only works with the **Solana blockchain** and supports wallets compatible with the Solana Wallet Adapter.

---

## 🚀 Features

- 🔗 **Wallet Connection** using Solana Wallet Adapter
- 💸 **SOL Airdrop** to connected wallet on Devnet
- 📤 **Send Transaction** from the connected wallet to another address

## 🧠 What I Learned

- How to integrate `@solana/wallet-adapter` in a React app
- Interacting with Solana’s Devnet using `@solana/web3.js`
- Managing wallet state and user interactions on the frontend

## 🛠 Tech Stack

- React
- Tailwind CSS
- Solana Wallet Adapter
- Solana Web3.js

---

## 📦 Getting Started

To run the project locally:

### 1. Clone the repo

```bash
git clone https://github.com/Starz099/first-dapp.git
cd first-dapp
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up environment variables
Create a .env file in the root directory and copy the contents of .env.example into it. Then update it with your own Solana Devnet RPC endpoint.

```bash
cp .env.example .env
```
Update the .env file:
```bash
VITE_SOL_ENDPOINT=https://your-solana-devnet-endpoint
```
You can get a free RPC endpoint from Helius, QuickNode, or Alchemy.

### 4. Start the development server

```bash
npm run dev
```
Make sure your browser has a Solana wallet extension (like Phantom) installed and set to Devnet.

---
### Demo Video

Can be found in demo-video folder