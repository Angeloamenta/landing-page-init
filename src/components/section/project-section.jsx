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

                {/* Header della sezione strutturato a due colonne */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-24 gap-12 border-b border-white/10 pb-16">
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 mb-6 rounded-full border border-white/20 text-white/50 text-xs tracking-widest uppercase backdrop-blur-sm">
                            Selected Works
                        </span>
                        <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                            Recent <br />
                            <span className="text-white/40">Projects.</span>
                        </h2>
                    </div>

                    <div className="lg:w-1/3 flex flex-col gap-8">
                        {/* Testo Descrittivo Premium */}
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                            A curated selection of our most ambitious endeavors. We partner with visionaries to transform complex challenges into seamless, award-winning digital experiences.
                        </p>

                        {/* Pulsante 'Vedi tutti' minimalista */}
                        <div className="flex">
                            <button className="group flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors pb-2 border-b border-white/20 hover:border-white/80">
                                View all works
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Griglia Progetti */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none bg-white/5 border border-white/10"
                        >
                            {/* Immagine */}
                            <div className="relative aspect-4/3 w-full overflow-hidden">
                                <img
                                    src={project.img}
                                    className="object-cover w-full h-full grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                    alt={project.title}
                                />
                                {/* Overlay scuro decorativo che si apre verso l'alto on hover */}
                                <div className="absolute inset-0 bg-black/60 group-hover:opacity-0 transition-opacity duration-700 ease-in-out"></div>
                            </div>

                            {/* Testo in sovrimpressione che entra elegantemente dal basso */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 overflow-hidden">
                                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <p className="text-xs tracking-widest uppercase text-white/40 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.category}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-medium text-white opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Bordo decorativo interno che sfuma on hover */}
                            <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
