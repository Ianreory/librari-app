import { LocateIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

function Profile() {
  return (
    <Layout>
      <div className="w-full max-w-3xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">john@example.com</p>
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <div className="flex items-center space-x-4">
              <LocateIcon className="h-6 w-6 text-muted-foreground" />
              <p className="text-muted-foreground">
                123 Main St, Anytown USA 12345
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Recently Borrowed Book</h2>
            <div className="flex items-center space-x-4">
              {/* TODO: Get recently borrowed book data */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
