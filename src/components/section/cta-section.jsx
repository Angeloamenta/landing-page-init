'use client'

import react from "react"

export default function CtaSection() {
    return (
        <section className="py-[var(--spacing-xl)] px-[var(--spacing-base)] bg-gradient-to-r from-[var(--color-neutral-900)] to-[var(--color-neutral-950)]">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-[var(--font-size-h2)] md:text-[3rem] font-[var(--font-weight-bold)] text-[var(--color-background)] mb-6">
                    Pronto a iniziare?
                </h2>
                <p className="text-[var(--font-size-xl)] text-[var(--color-neutral-300)] mb-10 max-w-2xl mx-auto">
                    Contattaci per maggiori informazioni o per richiedere un preventivo personalizzato.
                </p>
                <div className="flex gap-[var(--spacing-base)] justify-center">
                    <button className="px-10 py-4 bg-[var(--color-background)] text-[var(--color-foreground)] rounded-[var(--radius-lg)] font-[var(--font-weight-semibold)] hover:bg-[var(--color-neutral-100)] transition text-[var(--font-size-lg)]">
                        Contattaci
                    </button>
                    <button className="px-10 py-4 border-2 border-[var(--color-background)] text-[var(--color-background)] rounded-[var(--radius-lg)] font-[var(--font-weight-semibold)] hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] transition text-[var(--font-size-lg)]">
                        Scopri di Più
                    </button>
                </div>
            </div>
        </section>
    )
}

