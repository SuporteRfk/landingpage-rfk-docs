import { WrapperSection } from "@/components/wrapper-section";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

import Image from "next/image";
import { HomeSection } from "@/components/home";

export default function Home() {
  return (
    <div className="font-sans bg-slate-300">
        <Header/>
        {/* Hero Section */}
        <HomeSection/>
        
        
    </div>
  );
}
