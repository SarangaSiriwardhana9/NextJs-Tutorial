'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

export function TabsDemo() {
  const router = useRouter();
  const [signupName, setSignupName] = useState('');
  const [signupMobileNo, setSignupMobileNo] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState("");

  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    if (!signupName || !signupEmail|| !signupMobileNo || !signupPassword) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(signupEmail)) {
      setError("Email is invalid");
      return;
    }

    if (signupPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          mobileNo: signupMobileNo,
          password: signupPassword,
        }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
        return;
      }

      if (res.status === 201) {
        setError("");
       //refresh the page
      window.location.reload();
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!isValidEmail(loginEmail)) {
      setError("Email is invalid");
      return;
    }
  
    if (!loginPassword || loginPassword.length < 8) {
      setError("Password is invalid");
      return;
    }
  
    const res = await signIn("credentials", {
      redirect: false,
      email: loginEmail,
      password: loginPassword,
    });
  
    if (res?.error) {
      setError("Invalid email or password");
    } else {
      setError("");
      // go to / page
      if (res?.url) {
        router.push("/"); // Ensure the URL is in quotes
        
      }
    }
  };
  

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <Tabs defaultValue="login" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to log in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="loginEmail">Email</Label>
              <Input id="loginEmail" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="loginPassword">Password</Label>
              <Input id="loginPassword" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin}>Login</Button>
          </CardFooter>
          {error && <p className="text-red-500">{error}</p>}
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="h-[500px]">
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Create a new account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="signupName">Name</Label>
              <Input id="signupName" value={signupName} onChange={(e) => setSignupName(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="signupEmail">Email</Label>
              <Input id="signupEmail" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="signupMobileNo">Mobile No</Label>
              <Input id="signupMobileNo" value={signupMobileNo} onChange={(e) => setSignupMobileNo(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="signupPassword">Password</Label>
              <Input id="signupPassword" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSignup}>Signup</Button>

            {error && <p className="text-red-500">{error}</p>}
          </CardFooter>
          
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default function Auth() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className=" ">
        <div className="w-full shadow-xl max-w-8xl">
          <TabsDemo />
        </div>
      </div>
    </div>
  );
}
