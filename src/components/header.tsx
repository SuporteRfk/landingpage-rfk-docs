"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui";
import {House, CircleQuestionMark, MousePointer, BrainCircuit} from "lucide-react";
import { Sling as Hamburger } from 'hamburger-react';
import LogoRfkDocs from "../../public/bookStack.svg";
import { useState } from "react";
import Image from "next/image";


const navHeader = [
    {
        Icon: House,
        title: "Ínicio",
        idScrollEffect: "home"
    },
    {
        Icon: CircleQuestionMark,
        title: "Sobre",
        idScrollEffect: "about"
    },
    {
        Icon: MousePointer,
        title: "Como usar?",
        idScrollEffect: "how-to-use"
    },
    {
        Icon: BrainCircuit,
        title: "AI Docs",
        idScrollEffect: "agent-ai-docs"
    },

];


export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [choiceNav, setChoiceNav] = useState("home")
    
    const scrollEffect = (id:string) => {
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior: "smooth"});
            setChoiceNav(id);
        }
    };


    return (
        <header id="home" className="fixed top-0 z-50 w-full h-20 shadow border-b border-sky-500 bg-white/30 backdrop-blur-lg">
            <div className="h-full container mx-auto flex justify-between items-center px-4">
                <div className="p-4 flex gap-2 bg-sky-300/20 rounded-sm shadow-inner shadow-sky-200">
                    <Image src={LogoRfkDocs} alt="logo"/>
                    <h1 className="font-bold text-sky-950">RFK Docs</h1>
                </div>
                {/* desktop */}
                <ul className="hidden md:flex items-center justify-end h-full gap-2">
                    {navHeader.map((nav) => (
                        <li key={nav.idScrollEffect}>
                            <button  
                                onClick={() => scrollEffect(nav.idScrollEffect)}
                                className={`flex items-center gap-1 py-1.5 px-2 rounded-sm text-sm
                                    ${choiceNav === nav.idScrollEffect ? " bg-sky-200 shadow-sky-400 shadow-inner": ""}
                                    hover:bg-sky-200 transition
                            `}>
                                <nav.Icon className="text-sm text-secondary h-5 w-5"/>
                                {nav.title}
                            </button>
                        </li>
                    ))}
                </ul>
                
                {/* Mobile */}
                <div className="mt-2 md:hidden">
                    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
                        <DropdownMenuTrigger asChild>
                            <button aria-label="Menu">
                                <Hamburger toggled={isOpen} toggle={setOpen} color="var(--color-secondary)" size={26} />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-neutral-100 shadow-inner rounded-b-sm flex flex-col justify-center items-end">
                            {navHeader.map((nav) => (
                                <DropdownMenuItem key={nav.idScrollEffect} asChild>
                                    <a
                                        onClick={() => {
                                            scrollEffect(nav.idScrollEffect);
                                            setOpen(false); // fecha o menu ao clicar
                                        }}
                                        className={`flex flex-row-reverse w-full items-center gap-2 px-2 py-1.5 rounded-sm text-sm transition
                                            ${choiceNav === nav.idScrollEffect ? "bg-sky-100 font-semibold" : ""}
                                        `}
                                    >
                                        <nav.Icon className="h-4 w-4 text-sky-600" />
                                        {nav.title}
                                    </a>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>  
            </div>
        </header>
    )
};