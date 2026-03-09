'use client'

import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Slider() {

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".lineslider",
                start: "top top",
                end: "+=250%",
                pin: true,
                scrub: 1, // Lega l'animazione allo scroll per un effetto molto più elegante
            },
        })

        // 1️⃣ Le linee salgono dal basso
        tl.from(".line", {
            scaleY: 0,
            transformOrigin: "bottom center",
            stagger: 0.1,
            duration: 1,
            ease: "power2.inOut",
        })

        // 2️⃣ I filler scuri riempiono la riga
        tl.from(".filler", {
            scaleX: 0,
            transformOrigin: "right center",
            stagger: -0.1,
            duration: 1,
            ease: "power2.inOut",
        }, "+=0.2")

        // 3️⃣ Appare il testo e l'immagine si "scopre" gradualmente
        tl.to(".image-split", {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power1.inOut",
        }, "<0.2")

        tl.to(".slider-text", {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        }, "<0.3")

        // 4️⃣ I filler si ritirano (aprendo la tenda) e il testo scompare in scala
        tl.to(".filler", {
            scaleX: 0,
            transformOrigin: "left center",
            stagger: 0.1,
            duration: 1.5,
            ease: "power2.inOut",
        }, "+=0.5")

        tl.to(".slider-text", {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
        }, "<")

    }, [])

    return (
        <div className="lineslider h-screen bg-black grid grid-cols-4 relative overflow-hidden">
            {/* Immagine di sfondo ad alto impatto */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <img
                    className="image-split w-full h-full object-cover opacity-0 scale-110 grayscale brightness-75 mix-blend-lighten"
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop"
                    alt="Abstract Digital Dark Future"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Testo in sovrimpressione elegante */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center w-full text-center">
                <div className="overflow-hidden p-4">
                    <h2 className="slider-text translate-y-full opacity-0 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight">
                        Shaping Tomorrow.
                    </h2>
                </div>
            </div>

            {/* Colonne verticali stile glassmorphism / dark */}
            <div className="line border-r border-white/10 flex items-end justify-center relative z-10 w-full h-full">
                <div className="filler absolute inset-0 bg-black"></div>
            </div>
            <div className="line border-r border-white/10 flex items-end justify-center relative z-10 w-full h-full">
                <div className="filler absolute inset-0 bg-black"></div>
            </div>
            <div className="line border-r border-white/10 flex items-end justify-center relative z-10 w-full h-full">
                <div className="filler absolute inset-0 bg-black"></div>
            </div>
            <div className="line flex items-end justify-center relative z-10 w-full h-full">
                <div className="filler absolute inset-0 bg-black"></div>
            </div>
        </div>
    )
}
