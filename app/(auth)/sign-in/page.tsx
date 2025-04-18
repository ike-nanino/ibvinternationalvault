"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [passkey, setPasskey] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      passkey,
      pin,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/profile");
    } else {
      setError("Invalid Passkey or PIN. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 lg:px-0">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/icons/ibvblue.png"
            alt="Vault Logo"
            className="h-24 w-auto"
            width={300}
            height={100}
          />
        </div>

        <h1 className="text-xl font-medium text-center mb-6">Sign In</h1>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="passkey"
              className="block text-sm font-medium text-gray-700"
            >
              Secret Passkey
            </label>
            <Input
              id="passkey"
              type="text"
              placeholder="Enter your secret passkey"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="pin"
              className="block text-sm font-medium text-gray-700"
            >
              IBV PIN
            </label>
            <Input
              id="pin"
              type="password"
              placeholder="Enter your 6-digit PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={6}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold relative"
            disabled={isLoading}
          >
            <span className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              Access Vault
            </span>
            {isLoading && (
              <span className="absolute inset-0 flex items-center justify-center animate-pulse">
                Accessing Vault...
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
