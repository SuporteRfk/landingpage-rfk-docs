"use client";
import { Search, Sparkles, Zap, CheckCircle2, NotebookPen } from "lucide-react";
import BookStackRfk from "../../public/bookstack-white.svg";
import { WrapperSection } from "./wrapper-section";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui";
import Link from "next/link";

const steps = [
    {
        step: "1",
        text: "Clique no botão abaixo pra acessar o portal.",
        icon: Zap,
        url: null
    },
    {
        step: "2",
        text: "Se não possui acesso, clique aqui para se cadastrar.",
        icon: CheckCircle2,
        url: "https://tally.so/r/mKqGrX"
    },
    {
        step: "3",
        text: "Dentro do portal, use a barra de busca, navegue pelas categorias ou pergunte ao agente de documentação!",
        icon: Search,
        url: null
    },
    {
        step: "4",
        text: "Pronto! Achou o que precisava? Salva nos favoritos!",
        icon: Sparkles,
        url: null
    }
];


export const HowToUseSection = () => {
    return(
        <WrapperSection idSection="how-to-use" height="min-h-fit h-screen" padding="py-4">
            <div className="flex flex-col items-center justify-center mx-auto container p-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
                    Como usar?
                </h2>
                <div className="flex flex-col gap-4">
                    {steps.map((step, index) => (
                        <Card 
                            key={index}
                            className={`p-7 border-primary/15 hover:-translate-y-2 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 animate-fade-in 
                                ${step.url ? "cursor-pointer bg-primary/10" : "cursor-default"}
                            `}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => step.url &&  window.open(step.url, "_target") }
                        >
                            <div className="flex flex-col items-center md:flex-row gap-4">
                                <p className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">{step.step}</p>
                                <div className="flex-1 flex flex-col sm:flex-row items-center gap-3 ">
                                    <step.icon className="w-6 h-6 text-primary " />
                                    <p className={`text-lg text-foreground text-center md:text-start ${step.url ? "hover:underline" : ""}`}>
                                        {step.text}
                                    </p>
                                </div>
                            </div>    
                        </Card>
                    ))}
                </div>
          </div>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 text-center mt-10">
            <Button 
              size="lg"
              asChild
              className="shadow-md w-full max-w-[200px]"
            >
              <Link href="https://documentacao.rfk.ind.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Image src={BookStackRfk} alt="BookStack" className="w-5 h-5" />
                ACESSAR AGORA
              </Link>
            </Button>
            <Button 
              size="lg"
              asChild
              className="shadow-md bg-secondary hover:bg-secondary/80 hover:brightness-125 transition-all"
              
            >
              <Link href="https://tally.so/r/mKqGrX/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <NotebookPen className="size-5"/>
                CADASTRAR AGORA
              </Link>
            </Button>
          </div>
        
        </WrapperSection>
    );
};