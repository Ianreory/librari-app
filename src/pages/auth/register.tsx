import Layout from "@/components/layout";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Registrasi</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" />

            <Label htmlFor="email">Email</Label>
            <Input id="email" />

            <Label htmlFor="password">Password</Label>
            <Input id="password" />

            <Label htmlFor="address">Address</Label>
            <Input id="address" />

            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input id="phoneNumber" />
          </CardContent>
          <CardFooter>
            <p>
              already have an account?{" "}
              <Link to="/login" className="hover:decoration-gray-600">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}
