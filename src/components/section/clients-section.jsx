'use client'

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Loghi SVG inline minimali in bianco, stile wireframe / monoline.
// In produzione sostituirai con i loghi reali dei clienti.
const logos = [
    {
        name: "Stripe",
        svg: (
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M13 12.5c0-1.7 1.4-2.4 3.6-2.4 3.2 0 7.3 1 10.5 2.7V5.2C24 3.8 20.9 3 17.6 3 8.8 3 3 7.5 3 14.3c0 10.6 14.5 8.9 14.5 13.4 0 2-1.7 2.7-4.2 2.7-3.6 0-8.2-1.5-11.9-3.5V34.6c4.1 1.7 8.1 2.4 11.9 2.4 9.1 0 15.3-4.5 15.3-11.3C28.6 14.8 13 16.8 13 12.5z" fill="currentColor" />
                <path d="M45 3l-6 34h8l6-34h-8z" fill="currentColor" opacity="0.6" />
                <path d="M88 3c-2.8 0-5.3 1.3-6.5 3.5L81 3h-7l-6 34h8l3.3-19.2c1-4.5 4.4-5.8 7.5-5.8l2-8c-.5-.1-1-.2-1.5-.2h.7z" fill="currentColor" opacity="0.6" />
                <path d="M62.5 3c-9.5 0-16 7-16 17s6.5 17 16 17 16-7 16-17-6.5-17-16-17zm0 27c-4.5 0-8-3.5-8-10s3.5-10 8-10 8 3.5 8 10-3.5 10-8 10z" fill="currentColor" opacity="0.7" />
            </svg>
        )
    },
    {
        name: "Vercel",
        svg: (
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M60 8L80 32H40L60 8Z" fill="currentColor" />
            </svg>
        )
    },
    {
        name: "Linear",
        svg: (
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M40 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M42 30L70 10" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    },
    {
        name: "Notion",
        svg: (
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="40" y="5" width="22" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M46 12h10M46 17h10M46 22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="66" y="8" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
        )
    },
    {
        name: "Figma",
        svg: (
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="54" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="66" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="54" cy="26" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="66" cy="20" r="6" fill="currentColor" opacity="0.3" />
                <rect x="48" y="20" width="12" height="12" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        )
    },
    {
        name: "Framer",
        svg: (
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M48 5h24v12H60L48 5z" fill="currentColor" />
                <path d="M48 17h12l12 12H48V17z" fill="currentColor" opacity="0.6" />
                <path d="M48 29l12 0 0 11-12-11z" fill="currentColor" opacity="0.3" />
            </svg>
        )
    },
]

export default function ClientsSection() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const items = sectionRef.current.querySelectorAll('.client-logo')
        gsap.fromTo(items, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
            }
        })
    }, [])

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-black font-sans border-t border-white/5 relative overflow-hidden">
            {/* Linee decorative verticali identiche ad About */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-white/5 pointer-events-none"></div>
            <div className="absolute left-2/4 top-0 w-px h-full bg-white/5 pointer-events-none"></div>
            <div className="absolute left-3/4 top-0 w-px h-full bg-white/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Testo introduttivo centrato */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 mb-6 rounded-full border border-white/20 text-white/50 text-xs tracking-widest uppercase backdrop-blur-sm">
                        Trusted By
                    </span>
                    <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                        Who chose <span className="text-white/40">us.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-lg text-white/50 font-light leading-relaxed">
                        Industry leaders trust us to deliver exceptional digital experiences.
                    </p>
                </div>

                {/* Griglia loghi — Minimal, spaziata, con interazione sull'hover */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className="client-logo group relative flex flex-col items-center justify-center h-36 bg-black hover:bg-white/5 transition-colors duration-500 cursor-default"
                        >
                            {/* Logo SVG */}
                            <div className="w-20 h-10 text-white/30 group-hover:text-white/70 transition-colors duration-500">
                                {logo.svg}
                            </div>
                            {/* Nome del brand che compare on hover */}
                            <span className="absolute bottom-4 text-[10px] tracking-widest uppercase text-white/0 group-hover:text-white/40 transition-colors duration-500">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
