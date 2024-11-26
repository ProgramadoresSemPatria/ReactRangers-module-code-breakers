'use client'

import Roadmap from "@/components/Roadmap";
import { ProgressProvider } from "@/data/context/ProgressContext";

export default function Home() {
  return (
    <ProgressProvider >
      <Roadmap/>
    </ProgressProvider>
  );
};