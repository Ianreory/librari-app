import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { userLogin } from "@/utils/apis/auth";
import { LoginSchema } from "@/utils/types/auth";

function Login() {
  const [body, setBody] = useState<LoginSchema>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const response = await userLogin(body);

      Cookies.set("token", response.payload.token);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full"
              required
              value={body.email}
              onChange={(e) =>
                setBody({
                  ...body,
                  email: e.target.value,
                })
              }
            />

            <Label className="mt-4">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full"
              required
              value={body.password}
              onChange={(e) =>
                setBody({
                  ...body,
                  password: e.target.value,
                })
              }
            />
            <Button type="submit" className="w-full mt-4" onClick={() => handleSubmit()}>
              Sign in
            </Button>
          </CardContent>
          <CardFooter>
            <p>
              Dont't have an account? <Link to="/register">Register</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}

export default Login;
