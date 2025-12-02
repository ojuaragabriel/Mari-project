"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#abordagem", label: "Abordagem" },
    { href: "#para-quem", label: "Público-alvo" },
    { href: "#faq", label: "Perguntas frequentes" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/images/design-mode/ma(1).png"
                alt="Logo Mariana Alves André"
                className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                  Mariana Alves
                </span>
                <span className="text-sm text-muted-foreground">CRP 03/30333</span>
                <span className="text-sm text-muted-foreground">Psicóloga Clínica</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-[27px] py-0 px-0">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Botão Agendar sessão (sem sombra) */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://wa.me/5571999771646?text=Olá%2C+Mariana!+Gostaria+de+agendar+uma+sessão."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground rounded-2xl hover:bg-secondary transition-colors font-medium mx-0 px-[34px] py-2 my-[11px]"
                style={{ boxShadow: "none" }}
              >
                Agendar sessão
              </Link>
            </motion.div>

            {/* Ícone do Instagram à direita do botão */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="https://www.instagram.com/psimarialves"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - @psimarialves"
                className="ml-3 text-primary hover:text-secondary transition-colors flex items-center justify-center"
              >
                <Instagram className="px-0 py-0 w-auto h-auto" size={26} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://www.instagram.com/psimarialves"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <Instagram size={20} />
              <span>@psimarialves</span>
            </Link>

            <Link
              href="https://wa.me/5571999771646?text=Olá%2C+Mariana!+Gostaria+de+agendar+uma+sessão."
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-2xl hover:bg-secondary transition-colors font-medium text-center"
              style={{ boxShadow: "none" }}
            >
              Agendar sessão
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
