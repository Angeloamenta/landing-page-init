'use client'

import react from "react"

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-neutral-900)] via-[var(--color-neutral-800)] to-[var(--color-neutral-950)] flex justify-center items-center px-[var(--spacing-base)]">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="md:text-[3.75rem] font-[var(--font-weight-bold)] !text-[var(--color-background)] mb-6 leading-[var(--line-height-tight)]" style={{ fontSize: 'var(--font-size-h1)' }}>
                    Titolo Principale
                </h1>
                <p className="text-[var(--color-neutral-300)] mb-[var(--spacing-lg)] max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-xl)' }}>
                    Sottotitolo descrittivo che cattura l'attenzione e comunica il valore principale del prodotto o servizio.
                </p>
                <div className="flex gap-[var(--spacing-base)] justify-center">
                    <button className="px-[var(--spacing-lg)] py-3 bg-[var(--color-background)] text-[var(--color-foreground)] rounded-[var(--radius-lg)] font-[var(--font-weight-semibold)] hover:bg-[var(--color-neutral-100)] transition">
                        Inizia Ora
                    </button>
                    <button className="px-[var(--spacing-lg)] py-3 border-2 border-[var(--color-background)] text-[var(--color-background)] rounded-[var(--radius-lg)] font-[var(--font-weight-semibold)] hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] transition">
                        Scopri di Più
                    </button>
                </div>
            </div>
        </div>
    )
}