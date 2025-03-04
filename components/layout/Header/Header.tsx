"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ToggleMenu from "./ToggleMenu"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        { name: "Início", href: "#hero" },
        { name: "Sobre Nós", href: "#about" },
        { name: "Cardápio", href: "#menu" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Contato & Reservas", href: "#contact" },
    ]

    return (
        <header
            className={`fixed w-full px-2 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-white font-playfair text-2xl md:text-3xl font-bold">
                    <span className="text-primary">Bella</span> Mesa
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contact" className="btn-primary">
                        Fazer Reserva
                    </Link>
                </nav>
                <ToggleMenu/>
            </div>
        </header>
    )
}

