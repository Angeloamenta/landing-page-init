'use client'

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CtaSection() {
    const ctaRef = useRef(null)

    useEffect(() => {
        // Simple scale and fade in effect for CTA on scroll
        gsap.fromTo(ctaRef.current, {
            y: 50,
            opacity: 0,
            scale: 0.95
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 80%",
            }
        })
    }, [])

    return (
        <section className="relative py-40 px-6 min-h-[70vh] flex items-center justify-center bg-black overflow-hidden border-t border-white/5 font-sans">

            {/* Background elements for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div ref={ctaRef} className="max-w-4xl mx-auto text-center relative z-10 p-12 md:p-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden group">
                {/* Subtle spotlight effect inside the card */}
                <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                <span className="inline-block py-1 px-3 mb-8 rounded-full border border-white/20 text-white/50 text-xs tracking-widest uppercase">
                    Ready for the next step?
                </span>

                <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                    Let's shape<br className="md:hidden" /> the <span className="text-white/40 italic">future</span> together.
                </h2>

                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                    Partner with us to transform your vision into reality. We craft digital experiences that leave a lasting impact.
                </p>

                {/* Minimalist Premium Button */}
                <button className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase text-black bg-white rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                    <span className="relative z-10">Start a Project</span>
                </button>
            </div>

            {/* Grid lines */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-white/5 pointer-events-none"></div>
            <div className="absolute left-3/4 top-0 w-px h-full bg-white/5 pointer-events-none"></div>
        </section>
    )
}

