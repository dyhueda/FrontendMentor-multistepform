"use Client"
import Image from "next/image";

export default function PlansButton(props) {

  const plan = props.plan;
  let price;
  if (props.yearly) {
    price = "$" + plan.yearPrice + "/yr";
  } else {
    price = "$" + plan.monthPrice + "/mo";
  }

  const handleClick = (e) =>{
    e.preventDefault();
    props.setSelected(plan)

  }

  return (
    <button value={plan.name} onClick={(e)=>{handleClick(e)}} className={`flex flex-row  items-start sm:w-1/3 w-full py-4 px-3 border rounded-lg mt-3 ${props.selected.name == plan.name ? ('bg-Alabaster border-PurplishBlue'):('')}`} >
      <div className="flex flex-row gap-4 sm:flex-col">
        <Image src={plan.img} width={40} height={40} alt={plan.name}/>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-MarineBlue font-bold">{plan.name}</h2>
          <p>{price}</p>
          {props.yearly && 
          <p className="text-sm text-MarineBlue">2 months free</p>}
        </div>
      </div>
    </button>
  );
}
