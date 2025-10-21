import { AboutSection, AiDocsSection, Header, HomeSection, HowToUseSection } from "@/components";
import { Footer } from "@/components/footer";

export default function Home() {
      
  
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
