import React from "react";
import { NewButton } from "./new-button";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="fixed z-10 left-0 bg-blue-400 h-full w-16 flex p-3 flex-col gap-y-4">
      <NewButton />
    </aside>
  );
}
