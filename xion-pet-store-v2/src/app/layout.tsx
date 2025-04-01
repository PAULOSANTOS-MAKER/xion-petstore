"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import { AbstraxionProvider } from "@burnt-labs/abstraxion";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ['latin'] });

const treasuryConfig = {
  treasury: "xion1hyg5rj7pntuyrvp9p3vz2mcnzah6ycjf4h7wfmx8ws6cyslayxhsf5vdem", // Tesouraria da sua conta no Portal
  rpcUrl: "https://rpc.xion-testnet-2.burnt.com/",
  restUrl: "https://api.xion-testnet-2.burnt.com/"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AbstraxionProvider config={treasuryConfig}>
          {children}
        </AbstraxionProvider>
      </body>
    </html>
  );
}
