import Image from "next/image";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 text-center">
        <h1
          className={`text-6xl font-semibold text-white frop-shadow-md flex justify-center items-center ${poppins.className}`}
        >
          <Image
            src="/assets/images/auth.svg"
            alt="Logo"
            width={80}
            height={80}
            className="inline-block mr-2 bg-clip-content bg-green-500/85 rounded-full border-4 border-green-700"
          />
          Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>

        <LoginButton>
          <Button variant="default" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
