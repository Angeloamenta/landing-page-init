'use client'

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ProjectSection() {
    const gridRef = useRef(null)

    useEffect(() => {
        // Animazione in sequenza delle card al momento dello scroll
        gsap.fromTo(gridRef.current.children, {
            y: 50,
            opacity: 0,
            scale: 0.98
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 85%",
            }
        })
    }, [])

    const projects = [
        {
            title: "Project Alpha",
            category: "AI Integration",
            img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2600&auto=format&fit=crop",
        },
        {
            title: "Neon Nexus",
            category: "Web3 Platform",
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        },
        {
            title: "Horizon UI",
            category: "Design System",
            img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        },
        {
            title: "Quantum Dashboard",
            category: "Fintech App",
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
        }
    ]

    return (
        <section id="projects" className="py-32 px-6 min-h-screen bg-black font-sans border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Header della sezione */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="inline-block py-1 px-3 mb-6 rounded-full border border-white/20 text-white/50 text-xs tracking-widest uppercase">
                            Selected Works
                        </span>
                        <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">
                            Recent <span className="text-white/40">Projects.</span>
                        </h2>
                    </div>
                    {/* Pulsante 'Vedi tutti' minimalista */}
                    <button className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors pb-2 border-b border-white/10 hover:border-white/40">
                        View all works
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* Griglia Progetti */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {projects.map((project, i) => (
                        <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none">
                            {/* Immagine con zoom morbido on hover */}
                            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                                <img
                                    src={project.img}
                                    className="object-cover w-full h-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    alt={project.title}
                                />
                                {/* Soft overlay scuro sempre presente in fondo per leggibilità */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </div>

                            {/* Testo in sovrimpressione in basso */}
                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-xs tracking-widest uppercase text-white/50 mb-2">{project.category}</p>
                                <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
