"use client";
import {
  Abstraxion,
  useAbstraxionAccount,
  useModal
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import { useEffect } from "react";

export default function Page(): JSX.Element {
  const { data: { bech32Address }, isConnected, isConnecting } = useAbstraxionAccount();
  const [, setShow] = useModal();

  useEffect(() => {
    console.log({ isConnected, isConnecting });
  }, [isConnected, isConnecting]);

  return (
    <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4 text-white bg-black">
      <h1 className="text-2xl font-bold">🐶 Xion Pet Store</h1>
      <Button fullWidth onClick={() => setShow(true)} structure="base">
        {bech32Address ? "VIEW ACCOUNT" : "CONNECT"}
      </Button>
      {bech32Address && (
        <div className="border border-white rounded-md p-4">
          <strong>Wallet:</strong> {bech32Address}
        </div>
      )}
      <Abstraxion onClose={() => setShow(false)} />
    </main>
  );
}
