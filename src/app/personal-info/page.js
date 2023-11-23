"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import StepButtons from "@/components/StepButtons";
import { setCookie, deleteCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
export default function personalInfoPage() {

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    deleteCookie("user")
    setCookie("user", data , { httpOnly: false, secure: false })
    router.push('/plans')
  }

  return (
    <div className="sm:flex sm:gap-2">
      <StepButtons selected={1} />
      <Card
        title={"Personal info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      >
        <form className="w-full flex flex-col gap-2">
          <div>
            <div className="flex justify-between">
              <label className="text-sm text-MarineBlue">Name</label>
              <span className="text-sm text-StrawberryRed">{errors?.name?.message}</span>
            </div>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: 5,
              })}
              placeholder="e.g. Stephen King"
              className="border px-4 py-2 w-full rounded"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="text-sm text-MarineBlue">Email Address</label>
              <span className="text-sm text-StrawberryRed">{errors?.email?.message}</span>
            </div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Valid email required"}
              })}
              placeholder="e.g. stephenking@lorem.com"
              className="border px-4 py-2 w-full rounded"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="text-sm text-MarineBlue">Phone Number</label>
              <span className="text-sm text-StrawberryRed">{errors?.phone?.message}</span>
            </div>
            <input
              {...register("phone", {
                required: "Phone Number is required",
              })}
              type="number"
              placeholder="e.g. +1 234 567 890"
              className="border px-4 py-2 w-full rounded"
            />
          </div>
        </form>
      <Footer onClick={handleSubmit(onSubmit)} step={1} />
      </Card>
    </div>
  );
}
