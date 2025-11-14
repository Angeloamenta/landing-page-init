'use client'

import react from "react"

export default function CtaSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Pronto a iniziare?
                </h2>
                <p className="mb-8">
                    Contattaci per maggiori informazioni o per richiedere un preventivo.
                </p>
                <button className="px-8 py-3 bg-black text-white rounded">
                    Contattaci
                </button>
            </div>
        </section>
    )
}

