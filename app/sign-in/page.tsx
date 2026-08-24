import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default async function Home() {
  const session = await auth();
  if (session?.user?.id) {
    redirect("/builder");
  }
  return (
    <div className="relative size-full h-screen flex justify-center items-center">
      <div className="absolute bg-white -500 opacity size-full"></div>
      <form
        className="relative z-20 text-black bg-white h-10 rounded-md flex justify-center items-center"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="font-poppins flex justify-center items-center gap-2 w-80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-lg py-2"
          type="submit"
        >
          <FcGoogle size={20} /> Sign in with Google
        </button>
      </form>
    </div>
  );
}
