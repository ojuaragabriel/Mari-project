'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-muted py-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Faz sentido começar esse movimento agora?
        </h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
          Entre em contato comigo pelo WhatsApp e agende a primeira sessão.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://wa.me/5571999771646?text=Olá%2C+Mariana!+Gostaria+de+agendar+uma+sessão."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-secondary transition-colors font-semibold text-lg"
          >
            Agendar sessão pelo WhatsApp
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
