'use client'

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
    const titleRef = useRef(null)

    useEffect(() => {
        // Leggera animazione in entrata per il testo
        gsap.fromTo(titleRef.current.children, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            }
        })
    }, [])

    return (
        <section id="about" className="relative py-32 px-6 flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden font-sans border-t border-white/5">
            {/* Sfondo sfumato per creare profondità senza distrarre */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto w-full text-center relative z-10">
                <div ref={titleRef} className="flex flex-col items-center">

                    {/* Badge / Etichetta Minimal */}
                    <span className="inline-block py-1 px-3 mb-8 rounded-full border border-white/20 text-white/50 text-xs tracking-widest uppercase backdrop-blur-sm">
                        Our Vision
                    </span>

                    {/* Titolo Principale Gigante */}
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-12">
                        We don't just build, <br className="hidden md:block" />
                        <span className="text-white/40">we innovate.</span>
                    </h2>

                    {/* Testo descrittivo centrato e pulito */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed">
                        We are a team dedicated to creating breakthrough solutions that simplify people's lives and help businesses thrive. By pushing boundaries, we deliver experiences that exceed expectations.
                    </p>
                </div>
            </div>

            {/* Elementi decorativi stile "Slider/Footer" (Linee sottili) */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-white/5"></div>
            <div className="absolute left-2/4 top-0 w-px h-full bg-white/5"></div>
            <div className="absolute left-3/4 top-0 w-px h-full bg-white/5"></div>
        </section>
    )
}
