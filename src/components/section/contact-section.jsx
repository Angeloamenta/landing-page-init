'use client'

import react from "react"

export default function ContactSection() {
    return (
        <section id="contact" className="py-[var(--spacing-xl)] px-[var(--spacing-base)] bg-[var(--color-background)]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[var(--font-weight-bold)] mb-[var(--spacing-base)]">
                        Contatti
                    </h2>
                    <p className="text-[var(--color-neutral-600)] text-lg">
                        Siamo qui per rispondere alle tue domande
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)]">
                    <div className="p-[var(--spacing-lg)] border border-[var(--color-border)] rounded-[var(--rounded-xl)] text-center hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[var(--color-neutral-100)] rounded-[var(--rounded-full)] mx-auto mb-[var(--spacing-base)] flex items-center justify-center">
                            <svg className="w-7 h-7 text-[var(--color-neutral-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-[var(--spacing-sm)]">
                            Email
                        </h3>
                        <p className="text-[var(--color-neutral-600)]">info@example.com</p>
                    </div>
                    <div className="p-[var(--spacing-lg)] border border-[var(--color-border)] rounded-[var(--rounded-xl)] text-center hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[var(--color-neutral-100)] rounded-[var(--rounded-full)] mx-auto mb-[var(--spacing-base)] flex items-center justify-center">
                            <svg className="w-7 h-7 text-[var(--color-neutral-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-[var(--spacing-sm)]">
                            Telefono
                        </h3>
                        <p className="text-[var(--color-neutral-600)]">+39 123 456 7890</p>
                    </div>
                    <div className="p-[var(--spacing-lg)] border border-[var(--color-border)] rounded-[var(--rounded-xl)] text-center hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[var(--color-neutral-100)] rounded-[var(--rounded-full)] mx-auto mb-[var(--spacing-base)] flex items-center justify-center">
                            <svg className="w-7 h-7 text-[var(--color-neutral-700)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-[var(--spacing-sm)]">
                            Indirizzo
                        </h3>
                        <p className="text-[var(--color-neutral-600)]">Via Example, 123<br />00100 Roma</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

