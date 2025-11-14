'use client'

import react from "react"

export default function AboutSection() {
    return (
        <section id="about" className="py-[var(--spacing-xl)] px-[var(--spacing-base)] bg-[var(--color-background-muted)]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-[var(--font-weight-bold)] mb-[var(--spacing-base)]">
                        Chi Siamo
                    </h2>
                    <p className="text-[var(--color-neutral-600)] text-lg">
                        La nostra storia e la nostra missione
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-[var(--color-neutral-700)] leading-relaxed">
                            Siamo un team dedicato alla creazione di soluzioni innovative che semplificano la vita delle persone e aiutano le aziende a crescere.
                        </p>
                        <p className="text-lg text-[var(--color-neutral-700)] leading-relaxed">
                            Con anni di esperienza nel settore, ci impegniamo ogni giorno a offrire prodotti e servizi di alta qualità che superano le aspettative dei nostri clienti.
                        </p>
                    </div>
                    <div className="bg-[var(--color-neutral-200)] rounded-[var(--rounded-2xl)] aspect-square flex items-center justify-center">
                        <span className="text-[var(--color-foreground-muted)] text-sm">Immagine</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

