"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardSummary from "@/components/profile/DashboardSummary";
import VaultDetails from "@/components/profile/VaultDetails";
import ActivityLogs from "@/components/profile/ActivityLogs";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center p-4 lg:p-12 text-green-500 animate-pulse">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center p-4 lg:p-12 text-red-500">Unauthorized access. Please Check your Pin & sign in again.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white px-1 py-3 lg:p-6 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/path-to-avatar.jpg" alt="User Avatar" />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm lg:text-xl font-medium lg:font-semibold">Welcome, <span className='text-sm lg:text-base font-medium text-gray-600'>Fernando S. Smith</span></h1>
            <p className='text-xs lg:text-sm text-gray-400'>Av. Pedro López Meca, 26, 308777 Bolnuevo, Murcia</p>
          </div>
        </div>
        <Button variant="outline" onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="vaults">Vault Details</TabsTrigger>
            <TabsTrigger value="activity">Vault Invoice #</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardSummary />
          </TabsContent>
          <TabsContent value="vaults">
            <VaultDetails />
          </TabsContent>
          <TabsContent value="activity">
            <ActivityLogs />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
