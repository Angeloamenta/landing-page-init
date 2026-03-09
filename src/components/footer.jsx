'use client'

import React, { useEffect } from "react"
import gsap from "gsap"

export default function Footer() {

    useEffect(() => {
        gsap.fromTo('.box-footer', {
            opacity: 0,
            backgroundColor: '#ffffffa2',
        }, {
            opacity: 1, duration: 1, stagger: 0.1, backgroundColor: 'transparent',
            scrollTrigger: {
                trigger: '.inner-footer',
                start: 'top bottom-=100px',
                toggleActions: "play none none reverse",
            },
        })
    }, []);

    const colors = ['#f496361a', '#f480541a', '#ea646f1a'];

    const randomizeBg = (e, type) => {
        if (type === 'enter') {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            e.currentTarget.style.backgroundColor = randomColor;
        } else {
            e.currentTarget.style.backgroundColor = 'transparent';
        }
    };

    // Ricreiamo 48 celle (12 x 4) come nell'originale, ma usiamo un map per mantenere pulito il codice e ripristinare correttamente gli eventi hover
    const cells = Array.from({ length: 48 });

    return (
        <footer className="w-full bg-black font-sans">
            <div className="inner-footer p-5 bg-black gap-0.5 grid grid-cols-12 relative min-h-[60vh]">

                {/* Menu Interno aggiornato premium */}
                <div className="central-box flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl w-[90%] md:w-[25%] h-[85%] bg-black/40 border border-white/10 backdrop-blur-xl p-8 shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                    <div className="w-full text-center relative z-10 flex flex-col h-full justify-between">

                        <div>
                            <h2 className="text-3xl font-medium tracking-tight text-white mb-6">Build the<br />Future.</h2>
                        </div>

                        <ul className="flex flex-col gap-5 text-sm font-light text-white/60 mb-10">
                            <li className="hover:text-white transition-colors cursor-pointer">Projects</li>
                            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Capabilities</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                        </ul>

                        <div className="text-[10px] text-white/30 uppercase tracking-widest">
                            © 2026 All rights reserved
                        </div>
                    </div>
                </div>

                {/* Griglia di celle originali con testo bianco */}
                {cells.map((_, i) => {
                    let cellContent = null;
                    if (i === 0) cellContent = "designers and";
                    if (i === 3) cellContent = "developers";
                    if (i === 11) cellContent = "ux";
                    if (i === 15) cellContent = "designers";
                    if (i === 23) cellContent = "ai";
                    if (i === 47) cellContent = "with love by ideology";

                    return (
                        <div
                            key={i}
                            className="box-footer rounded-md h-50 border border-slate-500/20 p-2 hover:bg-white/10 transition duration-500 ease-in-out flex items-end"
                            onMouseEnter={(e) => randomizeBg(e, 'enter')}
                            onMouseLeave={(e) => randomizeBg(e, 'leave')}
                        >
                            {/* Aggiunto text-white per far risaltare sempre le scritte */}
                            {cellContent && (
                                <p className="uppercase text-[10px] text-white tracking-widest">{cellContent}</p>
                            )}
                        </div>
                    );
                })}

            </div>
        </footer>
    )
}
