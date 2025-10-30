import BookRfkDocs from "../../public/bookstack-white.svg";
import { WrapperSection } from "./wrapper-section";
import LogoRFK from "../../public/logo.png";
import { Button } from "./ui/button";
import Image from "next/image";


export const HomeSection = () => {
    return (
     <WrapperSection colorBg="bg-gradient-to-t from-sky-200 to-sky-500" margin="mt-20" height="h-[calc(100vh-80px)]" idSection="home">    
        <div className="flex flex-col items-center text-center animate-fade-in ">
            <Image 
                src={LogoRFK} 
                alt="Grupo RFK Logo" 
                className="h-full max-h-72 w-fit object-cover"
            />
            <div className="space-y-4 max-w-4xl">
                <h2 className="text-3xl md:text-6xl font-bold text-gray-700 leading-tight flex items-center justify-center gap-4">
                  Documentação RFK
                </h2>
                <p className="text-[18px] md:text-xl text-secondary font-bold">
                  Tudo que você precisa saber sobre processos, sistemas e tutoriais em um só lugar.
                </p>
              </div>
              <Button 
                variant="default" 
                size="lg"
                className="mt-6"
              >
                <a href="https://documentacao.rfk.ind.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Image src={BookRfkDocs}  alt="BookStack" className="w-5 h-5" />
                  <span className="hidden md:block">ACESSAR PLATAFORMA DE DOCUMENTAÇÃO</span>
                  <span className="md:hidden">ACESSAR DOCUMENTAÇÃO</span>
                </a>
              </Button>
            </div>
          
          
        </WrapperSection>
    )
};