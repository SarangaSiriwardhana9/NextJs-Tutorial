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

export function TabsDemo() {
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
              <Label htmlFor="loginUsername">Username</Label>
              <Input id="loginUsername" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="loginPassword">Password</Label>
              <Input id="loginPassword" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
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
              <Input id="signupName" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="signupUsername">Username</Label>
              <Input id="signupUsername" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="signupPassword">Password</Label>
              <Input id="signupPassword" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Signup</Button>
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