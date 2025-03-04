import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Cardápio", href: "#menu" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato & Reservas", href: "#contact" },
]

export default function ToggleMenu() {
    return (
        <div className="lg:hidden flex">
            <Sheet>
                <SheetTrigger >
                    <MenuIcon color="#FFF" size={30} />
                </SheetTrigger>
                <SheetContent className="bg-black/50 border-none text-primary">
                    <SheetHeader>
                        <SheetTitle>
                            <Link href="/" className="text-white text-2xl md:text-3xl font-bold">
                                <span className="text-primary">Bella</span> Mesa
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="grid grid-cols-1 place-items-start px-6 gap-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white text-lg hover:text-primary transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contact" className="btn-primary w-full text-center mt-6 font-bold text-lg">
                            Login
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
