"use client"
import { AboutSection, AiDocsSection, Header, HomeSection, HowToUseSection } from "@/components";
import { Footer } from "@/components/footer";
import { useEffect } from "react";



export default function Home() {
    const path = window.location.pathname.replace("/", "");
    const map: Record<string, string> = {
        "": "home",
        "sobre": "about",
        "como-usar": "how-to-use",
        "ai-docs": "agent-ai-docs"
    };

    const id = map[path];
    
    useEffect(() => {
        if (id) {
            const section = document.getElementById(id);
            if (section) {
                setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 100);
            }
        }
    }, []);
    
  
    return (
    <div className="font-sans bg-slate-300">
        <div id="home" className="absolute top-0"/>
        <Header/>
        <HomeSection/>{/* Sessão Home*/}
        <AboutSection/>{/* Sobre*/}
        <HowToUseSection/> {/* Sessão de como usar */}        
        <AiDocsSection/>{/* Sessão do agende de AI */}
        <Footer/>
    </div>
  );
}
