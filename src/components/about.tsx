import { BookOpen, Search, Users, Brain} from "lucide-react";
import { Card } from "./ui/card";
import { WrapperSection } from "./wrapper-section";

const cardInfo = [
        {
            icon: Search,
            title: "Busque rapidamente",
            description: "Encontre qualquer procedimento em segundos"
        },
        {
            icon: BookOpen,
            title: "Autonomia total",
            description: "Chega de depender do 'fulano' pra saber como faz"
        },
        {
            icon: Brain,
            title: "Evite erros",
            description: "Menos esquecimentos e erros operacionais"
        },
        {
            icon: Users,
            title: "Padronização",
            description: "Facilite a vida de novos colaboradores"
        }      
]


export const AboutSection = () => {
    return (
        <div>
            <WrapperSection idSection="about" height="h-fit" padding="py-20">
                <div className="max-w-4xl mx-auto container animate-fade-in flex justify-center items-center p-4">
                    <div className="text-center space-y-6 ">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">
                            O que é a Plataforma de Documentação da Refriko?
                        </h2>
                        <div className="bg-sky-50/25 rounded-2xl p-12 border border-sky-500/30 shadow-md">
                            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                                É um <span className="text-primary font-bold">portal interno</span> com toda a documentação da empresa: guias de processos, 
                                tutoriais dos nossos sistemas ERP, passo a passo para solicitações, formulários, manuais e muito mais.
                                <br /><br />
                                Tudo <span className="text-primary font-bold">organizado, pesquisável e atualizado</span> pela equipe de TI e gestores de cada área!tran
                            </p>
                        </div>
                    </div>
                </div>
            </WrapperSection>
            {/* Benefícios */}
            <WrapperSection  height="h-fit" colorBg="bg-gradient-to-bl from-sky-50 to-sky-100" padding="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
                                Por que ela é útil pra você?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {cardInfo.map((card, index) => (
                                    <Card 
                                        key={index} 
                                        className="p-6 hover:shadow-md  transition-all duration-300 hover:-translate-y-2 bg-card backdrop-blur-sm border-sky-500/25 animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <card.icon className="w-12 h-12 text-primary mb-4" />
                                        <h3 className="text-xl font-semibold text-secondary mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {card.description}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                    </div>
                </div>
            </WrapperSection>

        </div>
    )
};