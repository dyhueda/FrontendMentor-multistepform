export default function Card({ children, title, description }) {
  console.log();
  return (
    <div className="sm:relative flex flex-col gap-2 sm:ml-16 sm:shadow-none sm:w-2/3 bg-white m-4 rounded-lg px-4 py-8 shadow-lg">
      <h1 className="text-MarineBlue text-2xl font-bold">{title}</h1>
      <h2 className="text-lg">{description}</h2>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
}
