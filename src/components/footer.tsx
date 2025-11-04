import Image from "next/image";
import grupoRfkLogoWhite from "../../public/logo-branca.png";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto p-4">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <Image 
                        src={grupoRfkLogoWhite} 
                        alt="Grupo RFK Logo" 
                        className="w-fit h-20 mx-auto"
                        width={250}
                        height={80}
                        loading="lazy"
                        decoding="async"
                    />
                    <p className="text-white/80">
                        Desenvolvido pela Time de T.I - Refriko.
                    </p>
                    <p className="text-white/80">
                        Em caso de dúvidas, sugestões, fale com a TI pelo{" "}  
                            <Link 
                                href="https://rda.rfk.ind.br/" 
                                className="font-bold underline hover:text-primary transition-colors" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                 RDA
                            </Link>                      
                    </p>
                    <div className="pt-6 border-t border-white">
                        <p className="text-sm text-white">
                            © 2025 Grupo RFK - Refriko. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
};