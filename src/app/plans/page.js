"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import PlansButton from "@/components/PlansButton";
import StepButtons from "@/components/StepButtons";
import { setCookie, deleteCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Switch from "react-switch";

export default function plansPage() {
  const router = useRouter();
  const [yearly, setYearly] = useState(false)
  const plans = [
    { name: "Arcade", monthPrice: 9, yearPrice: 90 , img: "/icon-arcade.svg" },
    { name: "Advanced", monthPrice: 12, yearPrice: 120 , img: "/icon-advanced.svg" },
    { name: "Pro", monthPrice: 15, yearPrice: 150 , img: "/icon-pro.svg" },
  ];
  const [selected, setSelected] = useState(plans[0])
  const handlePlan = () => {
    let plan
    if(yearly){
      plan = {name: selected.name, price: selected.yearPrice, yearly : true}
    }else{
      plan = {name: selected.name, price: selected.monthPrice, yearly: false}
    }
    deleteCookie("plan")
    setCookie("plan", plan)
    router.push('/add-ons')

  }
  return (
    <div className="sm:flex sm:gap-2">
      <StepButtons selected={2} />
      <Card
        title={"Select your plan"}
        description={"You have the option of monthly or yearly billing."}
      >
        <div className="sm:flex sm:justify-between w-full sm:gap-3">

        {plans.map((plan)=>(
          <React.Fragment key={plan.name}>
            <PlansButton plan={plan} yearly={yearly} selected={selected} setSelected={setSelected} />
          </React.Fragment>
        ))}
        </div>
      <div className="flex justify-center gap-7 bg-Alabaster w-full py-3 rounded-lg">
          <p className={`font-bold ${!yearly ? ('text-MarineBlue'):('')}`}>Monthly</p>
      <Switch checked={yearly} onChange={setYearly} handleDiameter={12} offColor={'#03285C'} onColor={'#03285C'} uncheckedIcon={false} checkedIcon={false} height={20} width={40}/>
          <p className={`font-bold ${yearly ? ('text-MarineBlue'):('')}`}>Yearly</p>
      </div>
  <Footer onClick={handlePlan} step={2}/>
      </Card>

    </div>
  );
}
