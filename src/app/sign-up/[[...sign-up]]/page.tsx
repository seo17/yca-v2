import { SignUp } from "@clerk/nextjs";

export const runtime = "edge";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex items-center justify-center flex-col gap-10 p-3">
        <SignUp />
      </div>
    </div>
  );
}
