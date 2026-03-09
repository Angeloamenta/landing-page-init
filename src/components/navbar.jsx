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
                    <Link href="/" className="flex items-center gap-4 transition-all duration-300 hover:opacity-80 group">
                        {/* Logo SVG — Prisma Neurale Geometrico */}
                        <div className="relative">
                            <svg width="34" height="34" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-500">
                                <path d="M19 4L34 12V26L19 34L4 26V12L19 4Z" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                                <path d="M19 12L27 16.5V23.5L19 28L11 23.5V16.5L19 12Z" fill="white" />
                                <path d="M19 4V12" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                                <path d="M4 12L11 16.5" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                                <path d="M34 12L27 16.5" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                                <path d="M19 34V28" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                            </svg>
                            {/* Subtle pulse behind the core */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/20 blur-md rounded-full group-hover:bg-white/40 transition-colors"></div>
                        </div>

                        {/* Wordmark: PRISM AI */}
                        <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium tracking-[0.3em] uppercase leading-none text-white">Prism</span>
                                <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-white/30 leading-none mt-1">Intelligence</span>
                            </div>
                            <div className="h-6 w-px bg-white/5 mx-1 hidden sm:block"></div>

                        </div>
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