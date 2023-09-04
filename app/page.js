"use client";
import { useEffect, useState } from "react";
import Card from "./components/card";

const Weapons = [{ type: "paper" }, { type: "scissors" }, { type: "rock" }];

export default function Home() {
  const [weapon, setWeapon] = useState("");

  useEffect(() => {
    console.log(weapon);
  }, [weapon]);

  return (
    <main className="flex flex-col  min-h-screen p-10 bg-gradient-to-b from-[hsl(214_47%_23%)] to-[hsl(237_49%_15%)]">
      <div className="border px-4 py-2 rounded flex justify-between items-center">
        <div>
          <img alt="logo" width={80} height={80} src="/logo.svg" />
        </div>

        {weapon}

        <div className="bg-white w-[80px] h-[70px] rounded text-black"></div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {Weapons.map(({ type }) => (
          <Card key={type} type={type} setWeapon={() => setWeapon(type)} />
        ))}
      </div>
    </main>
  );
}
