'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"


export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
                        {/* Logo SVG — Prisma Neurale Geometrico per l'AI tech */}
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Struttura esterna wireframe in trasparenza */}
                            <path d="M19 4L34 12V26L19 34L4 26V12L19 4Z" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                            {/* Il nucleo solido (il prodotto AI finito) */}
                            <path d="M19 12L27 16.5V23.5L19 28L11 23.5V16.5L19 12Z" fill="white" />
                            {/* Connessioni tecniche sottili */}
                            <path d="M19 4V12" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                            <path d="M4 12L11 16.5" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                            <path d="M34 12L27 16.5" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                            <path d="M19 34V28" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                        </svg>
                    </Link>

                    {/* Menu Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-[0.9rem] font-medium tracking-wide text-white/80">
                        <Link href="#about" className="hover:text-white transition-colors">Chi Siamo</Link>
                        <Link href="#projects" className="hover:text-white transition-colors">Progetti</Link>
                        <Link href="#contact" className="hover:text-white transition-colors">Contatti</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}