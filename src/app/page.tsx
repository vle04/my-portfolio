"use client";

import Desktop from "@/components/WindowSystem/Desktop";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";

export default function Home() {
  // pop up notification
  useEffect(() => {
    toast.custom(() => (
      <div className="solid-shadow border rounded border-[6px] bg-white w-fit p-3">
        <div className="flex flex-row justify-between">
          <p><strong>notice:</strong></p>
          {/* <button onClick={() => toast.dismiss(t)}>&#91; x &#93;</button> */}
        </div>
        <p>this portfolio is still in development!</p>
      </div>
    ));
  }, []);

  return (
    <main className="min-h-screen">
      <Desktop/>
      <Toaster position="top-right" expand={true}/>
    </main>
  );
}
