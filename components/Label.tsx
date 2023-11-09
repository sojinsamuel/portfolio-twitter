import React from "react";
import { Chip } from "@nextui-org/chip";

export default function Label() {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 mx-auto",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      I&apos;m working on it, so you can&apos;t subscribe yet! 😅
    </Chip>
  );
}
