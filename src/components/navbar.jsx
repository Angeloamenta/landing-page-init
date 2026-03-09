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
                    <Link href="/" className="flex items-center gap-2 text-xl tracking-tight transition-opacity hover:opacity-80">
                        <Image
                            src="/logo-white.svg"
                            alt="Logo"
                            width={170}
                            height={170}
                            className="w-15 h-15"
                        />
                        {/* <span className="font-medium text-[1.3rem] leading-none mt-1">Landing AI</span> */}
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