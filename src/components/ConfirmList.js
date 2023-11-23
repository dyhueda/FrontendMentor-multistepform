export default function ConfirmList(props) {
  const plan = props.plan;
  const addons = props.addons;
  let totalPrice;
  if (plan.yearly) {
    totalPrice = plan.price;
    addons.map((addon) => {
      totalPrice = totalPrice + addon.priceYear;
    });
  } else {
    totalPrice = plan.price;
    addons.map((addon) => {
      totalPrice = totalPrice + addon.priceMonth;
    });
  }

  return (
    <div className="flex flex-col w-full text-base">
      <div className="bg-Alabaster p-3 rounded-lg">
        <div className="flex items-center justify-between border-b pb-2">
          <div className="flex flex-col">
            <h3 className="font-bold text-MarineBlue">
              {plan.name} {plan.yearly ? "(Yearly)" : "(Monthly)"}
            </h3>
            <a className="underline" href="/plans">
              Change
            </a>
          </div>
          <p className="font-bold text-MarineBlue">
            {plan.yearly ? `$${plan.price}/yr` : `$${plan.price}/mo`}{" "}
          </p>
        </div>
        <div className="flex flex-col py-2 gap-3">
          {addons.map((addon) => (
            <div className="flex justify-between" key={addon.title}>
              <p>{addon.title}</p>
              <p className=" font-medium text-MarineBlue">
                {plan.yearly
                  ? `+$${addon.priceYear}/yr`
                  : `+$${addon.priceMonth}/mo`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-3 pt-6">
        {plan.yearly ? (
          <>
            <p>Total (per year)</p>
            <p className="text-PurplishBlue font-bold text-lg">
              +${totalPrice}/yr
            </p>
          </>
        ) : (
          <>
            <p>Total (per month)</p>
            <p className="text-PurplishBlue font-bold text-lg">
              +${totalPrice}/mo
            </p>
          </>
        )}
      </div>
    </div>
  );
}