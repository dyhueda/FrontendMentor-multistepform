"use client";

import { useRouter } from "next/navigation";

export default function StepButtons(props) {
  const router = useRouter();
  const selected = props.selected;
  const steps = [
    { id: 1, route: "/personal-info", title: "YOUR INFO" },
    { id: 2, route: "/plans", title: "SELECT PLAN" },
    { id: 3, route: "/add-ons", title: "ADD-ONS" },
    { id: 4, route: "/finishing-up", title: "SUMMARY" },
  ];
  return (
    <div className="sm:flex-col sm:px-6 sm:py-8 sm:justify-start sm:gap-6 sm:m-0 sm:rounded-2xl sm:items-center sm:w-1/3 sm:full sm:bg-no-repeat sm:bg-[length:auto_100%] sm:bg-[url('./../../public/bg-sidebar-desktop.svg')]  flex w-full justify-center gap-3 my-8 ">
      {steps.map((step) => (
        <div className="sm:flex sm:w-full sm:font-bold sm:gap-4"  key={step.id}>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push(step.route);
            }}
            key={step.id}
            className={`font-bold border rounded-full w-9 h-9 ${
              selected == step.id
                ? "bg-LightBlue text-MarineBlue"
                : "text-white"
            }`}
          >
            {step.id}
          </button>
          <div className="hidden sm:flex sm:flex-col">
            <p className="text-sm">STEP {step.id}</p>
            <p className="text-white" >{step.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
