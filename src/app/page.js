"use client"
import Card from "@/components/Card"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <main className="h-full mt-20">
      <Card title={"Create your account"} description={"See our plans and get one that suits you exactly"}>
        <button onClick={(e)=>{e.preventDefault();router.push('/personal-info')}} className="w-fit text-White bg-MarineBlue px-3 py-2 rounded mt-5">Get started</button>
      </Card>
    </main>
  )
}
