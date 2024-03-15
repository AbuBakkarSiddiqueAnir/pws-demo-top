import React from "react";
import { UserButton } from "@clerk/nextjs";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 ">search</div>
      <UserButton />
    </nav>
  );
}
