"use client";

import Image from "next/image";
import { useState } from "react";

export default function AddonsButton(props) {
  const [active, setActive] = useState(false);
  let price;
  const addon = props.addon;
  if (props.yearly === true) {
    price = addon.priceYear+"/yr";
  } else {
    price = addon.priceMonth+"/mo";
  }

  const handleAddAddon = (e) => {
    e.preventDefault();
    setActive(!active);    
    if (props.selectedAddons.some((selectedAddons)=>selectedAddons.title === addon.title)) {
      const newArray = props.selectedAddons.filter(
        Addon => Addon.title !== addon.title
      );
      props.setSelectedAddons(newArray);
    } else {
      props.setSelectedAddons([...props.selectedAddons, addon]);
    }
  };
  return (
    <button
      onClick={(e) => {
        handleAddAddon(e);
      }}
      className={`flex flex-row items-start w-full py-4 px-3 border rounded-lg mt-3 ${active ? ('bg-Alabaster border-PurplishBlue'):('')} `}
    >
      <div className="flex flex-row gap-3 items-center w-full">
        {active ? (
          <Image
            src={"/checkbox-checked.svg"}
            width={24}
            height={24}
            alt="checked box"
          />
        ) : (
          <Image
            src={"/checkbox-unchecked.svg"}
            width={24}
            height={24}
            alt="unchecked box"
          />
        )}
        <div className="flex flex-col w-full items-start gap-1">
          <h2 className="text-MarineBlue font-bold">{addon.title}</h2>
          <p className="text-sm">{addon.description}</p>
        </div>
        <p className="text-sm text-PurplishBlue">+${price}</p>
      </div>
    </button>
  );
}
