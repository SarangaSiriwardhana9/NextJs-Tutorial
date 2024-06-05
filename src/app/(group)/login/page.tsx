'use client';
import { useState } from 'react';
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

export function TabsDemo() {
  const router = useRouter();

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
        }),
      });
  
      if (res.status === 400) {
        console.error("This email is already registered");
        // Handle error message display or redirection
      }
  
      if (res.status === 201) {
        console.log("User registered successfully");
        // Handle success message display or redirection
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error message display or redirection
    }
  };
  
  const handleLogin = () => {
    
    console.log('Login:', loginEmail, loginPassword);
   
  };

  return (
    <Tabs defaultValue="login"  className="w-[500px] ">
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
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="h-[400px]">
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
              <Label htmlFor="signupPassword">Password</Label>
              <Input id="signupPassword" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSignup}>Signup</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default function Login() {
  return (
    <div className="flex justify-center  items-center h-screen bg-gray-100">
      <div className=" ">
        <div className="w-full  shadow-xl  max-w-8xl">
          <TabsDemo />
        </div>
      </div>
    </div>
  );
}
