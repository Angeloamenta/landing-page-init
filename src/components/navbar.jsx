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
        <nav className="fixed top-0 left-0 right-0 bg-[var(--color-background)] border-b border-[var(--color-border)] z-50">
            <div className="max-w-7xl mx-auto px-[var(--spacing-base)]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-[var(--font-weight-bold)]">
                            Logo
                        </Link>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-[var(--color-foreground-muted)]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-[var(--spacing-base)] py-[var(--spacing-sm)] bg-[var(--color-foreground)] text-[var(--color-background)] rounded-[var(--rounded-base)]"
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
                    <div className="md:hidden py-[var(--spacing-base)] border-t border-[var(--color-border)]">
                        <div className="flex flex-col space-y-[var(--spacing-base)]">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-[var(--color-foreground-muted)]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="px-[var(--spacing-base)] py-[var(--spacing-sm)] bg-[var(--color-foreground)] text-[var(--color-background)] rounded-[var(--rounded-base)] text-center"
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