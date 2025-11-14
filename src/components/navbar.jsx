'use client'
import { useState } from "react"
import Link from "next/link"

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Servizi', href: '#features' },
    { name: 'Contatti', href: '#contact' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Logo
                        </Link>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-gray-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-4 py-2 bg-black text-white rounded"
                        >
                            Contattaci
                        </Link>
                    </div>

                    {/* Hamburger Button Mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-gray-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="px-4 py-2 bg-black text-white rounded text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contattaci
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}