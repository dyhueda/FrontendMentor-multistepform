import StepButtons from "@/components/StepButtons";
import Image from "next/image";

export default function thankYouPage() {
  return (
    <div className="sm:flex sm:gap-2">
      <StepButtons selected={4} />
      <div className="flex flex-col items-center gap-3 sm:max-w-[560px] sm:ml-16 sm:shadow-none sm:py-8 bg-white m-4 rounded-lg px-4 py-20 shadow-lg">
        <Image
          src={"/icon-thank-you.svg"}
          height={60}
          width={60}
          alt="thank you icon"
        />
        <h1 className="text-MarineBlue text-2xl font-bold">Thank you!</h1>
        <p className="text-base text-center w-full">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgamming.com.</p>
      </div>
    </div>
  );
}
