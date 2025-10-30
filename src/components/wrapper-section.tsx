import { strict } from "assert";

interface WrapperSectionProps {
    children: React.ReactNode;
    colorBg?: string;
    margin?:string;
    padding?:string;
    height?:string;
    idSection:string;
}

export const WrapperSection = ({children, colorBg="bg-white", margin, padding, height="h-full", idSection}:WrapperSectionProps) => {
    return (
        <section id={idSection} className={`${colorBg} ${margin} ${padding} ${height} w-full overflow-hidden flex flex-col items-center justify-center`}>
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
};