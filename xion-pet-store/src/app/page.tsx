"use client";

import { useState } from "react";
import {
  Abstraxion,
  AbstractionContext,
  useAbstraxionSigningClient,
  useAbstraxionAccount,
} from "@burnt-labs/abstraxion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: account } = useAbstraxionAccount();
  const { data: signingClient } = useAbstraxionSigningClient();

  return (
    <AbstractionContext.Provider
      value={{
        chainId: "xion-testnet-2",
        rpcUrl: "https://rpc.testnet.xion.burnt.com:443",
        restUrl: "https://api.testnet.xion.burnt.com:443",
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold mb-8 text-white">🐾 XION Pet Store</h1>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            {account ? 
              `Conectado: ${account.bech32Address.slice(0,6)}...${account.bech32Address.slice(-4)}` : 
              "Conectar Carteira"
            }
          </button>

          <Abstraxion
            open={isOpen}
            onClose={() => setIsOpen(false)}
          />

          {account && (
            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-white">Conta Conectada!</h2>
              <p className="text-gray-300">Endereço: {account.bech32Address}</p>
            </div>
          )}
        </div>
      </main>
    </AbstractionContext.Provider>
  );
}
