import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import HowItWorks from "@/components/sections/how-it-works";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Cta />
    </main>
  );
}
