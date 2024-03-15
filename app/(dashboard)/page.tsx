"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { UserButton } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmptyOrg />
    </main>
  );
}
