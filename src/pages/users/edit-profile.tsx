import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { deleteProfile, getProfile, updateProfile } from "@/utils/apis/users";
import { IUser, ProfileSchema } from "@/utils/types/users";

function EditProfile() {
  const [data, setData] = useState<ProfileSchema>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getProfile();
      const profile = response.payload;

      setData({
        address: profile.address,
        email: profile.email,
        full_name: profile.full_name,
        phone_number: profile.phone_number,
      });
    } catch (error) {
      alert(error);
    }
  }

  async function handleUpdate() {
    try {
      const response = await updateProfile(data!);

      alert(response.message);
    } catch (error) {
      alert(error);
    }
  }

  async function handleDelete() {
    try {
      const response = await deleteProfile();

      alert(response.message);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <Card className="w-full max-w-[600px] m-auto p-6 sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={data?.email} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={data?.full_name} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={data?.password}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" value={data?.phone_number} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" rows={3} value={data?.address} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="profile-picture">Profile Picture</Label>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={"/placeholder-user.jpg"} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Input id="profile-picture" type="file" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button variant="destructive" onClick={() => handleDelete()}>
            Delete Account
          </Button>
          <Button onClick={() => handleUpdate()}>Save Changes</Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}

export default EditProfile;
