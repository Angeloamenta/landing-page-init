'use client'

import react from "react"

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    Caratteristiche
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border rounded">
                        <h3 className="text-xl font-semibold mb-4">
                            Feature 1
                        </h3>
                        <p>
                            Descrizione della caratteristica principale del prodotto o servizio.
                        </p>
                    </div>
                    <div className="p-6 border rounded">
                        <h3 className="text-xl font-semibold mb-4">
                            Feature 2
                        </h3>
                        <p>
                            Descrizione della caratteristica principale del prodotto o servizio.
                        </p>
                    </div>
                    <div className="p-6 border rounded">
                        <h3 className="text-xl font-semibold mb-4">
                            Feature 3
                        </h3>
                        <p>
                            Descrizione della caratteristica principale del prodotto o servizio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

