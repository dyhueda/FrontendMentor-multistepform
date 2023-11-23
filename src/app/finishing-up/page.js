"use client"
import Card from "@/components/Card";
import ConfirmList from "@/components/ConfirmList";
import Footer from "@/components/Footer";
import StepButtons from "@/components/StepButtons";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";

export default function FinishingUpPage(){
  const router = useRouter();
  const user = getCookie("user")
  const plan = getCookie("plan")
  const addons = getCookie("addons")

  const handleConfirm = () =>{
    const data = {user: user, plan: plan, addons: addons}
    deleteCookie("data")
    deleteCookie("user")
    deleteCookie("plan")
    deleteCookie("addons")
    setCookie("data", data)
    router.push('/thank-you')
  }
    return(
        <div className="sm:flex sm:gap-2">
          <StepButtons selected={4}/>
          <Card
          title={"Finishing up"}
          description={"Double-check everything looks OK before confirming."}
          >
            <ConfirmList plan={plan} addons={addons} />
            <Footer onClick={handleConfirm} step={4}/>
          </Card>
        </div>
    )
}
