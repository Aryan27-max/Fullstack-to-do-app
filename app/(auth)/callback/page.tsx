"use client"
import { onAuthenticateUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthCallback() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const user = await onAuthenticateUser();
        if (200 === user?.status) {
          router.push("/dashboard");
        } else if (403 === user?.status || 500 === user?.status) {
          router.push("/signin");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        router.push("/signin");
      } finally {
        setIsLoading(false);
      }
    };

    authenticateUser();
  }, [router]);

  if (isLoading) {
    return <div>Authenticating...</div>;
  }

  return <div>i am a callback Route</div>;
}
