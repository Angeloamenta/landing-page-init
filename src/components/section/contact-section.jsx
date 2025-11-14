'use client'

import react from "react"

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    Contatti
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Email
                        </h3>
                        <p>info@example.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Telefono
                        </h3>
                        <p>+39 123 456 7890</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

