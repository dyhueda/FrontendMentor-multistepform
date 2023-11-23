"use client";
import AddonsButton from "@/components/AddonsButton";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import StepButtons from "@/components/StepButtons";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function addonsPage() {
  const router = useRouter();
  const plan = getCookie("plan") ;
  const [selectedAddons, setSelectedAddons] = useState([]);
  const addons = [
    {
      title: "Online service",
      description: "Access to multiplayer game",
      priceMonth: 1,
      priceYear: 10,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonth: 2,
      priceYear: 20,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonth: 2,
      priceYear: 20,
    },
  ];
  const handleAddons = () => {
    deleteCookie("addons");
    setCookie("addons", selectedAddons);
    router.push("/finishing-up");
  };
  return (
    <div className="sm:flex sm:gap-2">
      <StepButtons selected={3} />
      <Card
        title={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      >
        {addons.map((addon) => (
          <React.Fragment key={addon.title}>
            <AddonsButton
              addon={addon}
              selectedAddons={selectedAddons}
              setSelectedAddons={setSelectedAddons}
              yearly={plan.yearly}
            />
          </React.Fragment>
        ))}
        <Footer onClick={handleAddons} step={3} />
      </Card>
    </div>
  );
}
