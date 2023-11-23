"use client";

import { useRouter } from "next/navigation";

export default function Footer({step, onClick}) {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 sm:absolute w-full flex flex-row-reverse justify-between bg-White p-5 ">
      {step != 4 ? <button onClick={onClick} className="text-White bg-MarineBlue px-3 py-2 rounded">Next Step</button> : <button onClick={onClick} className="text-White bg-PurplishBlue px-5 py-2 rounded">Confirm</button>}
      <button
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
        className={`${step == 1 ? "hidden" : "block"}`}
      >
        Go Back
      </button>
    </div>
  );
}
