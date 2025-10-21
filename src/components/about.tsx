import { WrapperSection } from "./wrapper-section";


export const AboutSection = () => {
    return (
        <WrapperSection idSection="about">
            <div className="max-w-4xl mx-auto container animate-fade-in h-screen max-h-3/6 flex justify-center items-center p-4">
                <div className="text-center space-y-6 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">
                        O que é a Plataforma de Documentação da Refriko?
                    </h2>
                    <div className="bg-sky-100 rounded-2xl p-12 border border-sky-500/50">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            É um <strong>portal interno</strong> com toda a documentação da empresa: guias de processos, 
                            tutoriais dos nossos sistemas ERP, passo a passo para solicitações, formulários, manuais e muito mais.
                            <br /><br />
                            Tudo <strong>organizado, pesquisável e atualizado</strong> pela equipe de TI e gestores de cada área!
                        </p>
                    </div>
                </div>
            </div>
        </WrapperSection>
    )
};