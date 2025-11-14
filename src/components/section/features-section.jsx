'use client'

import react from "react"

export default function FeaturesSection() {
    return (
        <section id="features" className="py-[var(--spacing-xl)] px-[var(--spacing-base)]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[var(--font-size-h2)] md:text-[3rem] font-[var(--font-weight-bold)] mb-[var(--spacing-base)]">
                        Caratteristiche
                    </h2>
                    <p className="text-[var(--color-neutral-600)] text-[var(--font-size-lg)] max-w-2xl mx-auto">
                        Scopri le funzionalità che rendono il nostro prodotto unico
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)]">
                    <div className="p-[var(--spacing-lg)] border border-[var(--color-border)] rounded-[var(--radius-xl)] hover:shadow-[var(--shadow-lg)] transition-shadow">
                        <div className="w-12 h-12 bg-[var(--color-neutral-100)] rounded-[var(--radius-lg)] mb-6 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[var(--color-neutral-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-[var(--font-size-xl)] font-[var(--font-weight-bold)] mb-3">
                            Feature 1
                        </h3>
                        <p className="text-[var(--color-neutral-600)]">
                            Descrizione della caratteristica principale del prodotto o servizio.
                        </p>
                    </div>
                    <div className="p-[var(--spacing-lg)] border border-[var(--color-border)] rounded-[var(--radius-xl)] hover:shadow-[var(--shadow-lg)] transition-shadow">
                        <div className="w-12 h-12 bg-[var(--color-neutral-100)] rounded-[var(--radius-lg)] mb-6 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[var(--color-neutral-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-[var(--font-size-xl)] font-[var(--font-weight-bold)] mb-3">
                            Feature 2
                        </h3>
                        <p className="text-[var(--color-neutral-600)]">
                            Descrizione della caratteristica principale del prodotto o servizio.
                        </p>
                    </div>
                    <div className="p-[var(--spacing-lg)] border border-[var(--color-border)] rounded-[var(--radius-xl)] hover:shadow-[var(--shadow-lg)] transition-shadow">
                        <div className="w-12 h-12 bg-[var(--color-neutral-100)] rounded-[var(--radius-lg)] mb-6 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[var(--color-neutral-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-[var(--font-size-xl)] font-[var(--font-weight-bold)] mb-3">
                            Feature 3
                        </h3>
                        <p className="text-[var(--color-neutral-600)]">
                            Descrizione della caratteristica principale del prodotto o servizio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

