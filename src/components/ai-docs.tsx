import bookstackIcon from "../../public/bookStack.svg";
import { MessageSquare, Brain, FileText} from "lucide-react";
import { WrapperSection } from "./wrapper-section";
import { Button } from "./ui";
import { Card } from "./ui/card";
import Image from "next/image";

export const AiDocsSection = () => {
    return (
        <WrapperSection idSection="agent-ai-docs" height="h-fit" colorBg="bg-gradient-to-bl from-sky-50 to-sky-100" padding="py-20">
            <div className="container mx-auto p-2 md:px-4">
                <div className="max-w-5xl mx-auto pt-4">
                    {/* Titulo e subitulo */}
                    <div className="text-center space-y-6 mb-12">
                        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
                            <Brain className="w-5 h-5 text-primary hidden sm:block" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                Novidade: Inteligência Artificial
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground flex flex-col items-center gap-2">
                            <span className="flex items-center gap-3 text-secondary">
                                <Brain className="w-10 h-10 md:w-12 md:h-12 text-primary hidden sm:block" />
                                Conheça o RFK Docs Agent
                            </span>
                            <span className="text-primary">Seu novo assistente virtual!</span>
                        </h2>
                    </div>

                    {/* Card */}
                    <Card className="p-4 md:p-12 bg-card backdrop-blur-sm border-sky-500/15 shadow-md">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Primeira coluna de informações */}
                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            Tá com dúvida?
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Não sabe nem por onde começar a procurar?
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            Assistente inteligente
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Nosso assistente de IA responde suas perguntas com base na própria documentação da empresa.
                                            Você pergunta em linguagem natural, e ele entende e te responde como se fosse um colega explicando!
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-100/15 rounded-lg p-4 border border-primary/50">
                                    <p className="text-sm font-semibold text-foreground mb-2">💡 Exemplos de perguntas:</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary">•</span>
                                            <span>"Como lanço uma solicitação de compra?"</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary">•</span>
                                            <span>"Qual o processo de admissão de funcionário?"</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary">•</span>
                                            <span>"Como faço para resetar minha senha do sistema?"</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Segunda coluna de informações */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-bl from-sky-50 to-sky-100 rounded-xl p-8  shadow-inner space-y-4">
                                    <FileText className="w-12 h-12 opacity-90 text-primary" />
                                    <h4 className="text-xl font-bold text-primary">
                                        O agente consulta o conteúdo oficial e te dá a resposta com as referências!
                                    </h4>
                                    <p className="text-gray-800 text-sm">
                                        Quanto melhor a documentação feita por você e sua equipe, melhores serão as respostas da IA!
                                    </p>
                                </div>

                                <Button                                 
                                    size="lg"
                                    className="w-full"
                                    asChild
                                >
                                    <a href="http://192.168.50.5:8083" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        <Brain className="w-5 h-5" />
                                        FALAR COM O RFK DOCS AGENT
                                    </a>
                                </Button>

                                <div className="mt-6 p-4 bg-card/50  rounded-lg shadow-inner border">
                                    <p className="text-sm text-center font-bold text-primary">
                                        O RFK Docs Agent está disponível em:
                                    </p>
                                    <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Image src={bookstackIcon} alt="BookStack" className="w-5 h-5" />
                                        <span className="text-foreground/70">Plataforma de Documentação</span>
                                    </div>
                                    <span className="hidden sm:inline text-muted-foreground">•</span>
                                    <div className="flex items-center gap-2">
                                        <Brain className="w-5 h-5 text-primary" />
                                        <span className="text-foreground/70">RFK AI HUB</span>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                    </Card>
                </div>
            </div>
        </WrapperSection>
    )
};