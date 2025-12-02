'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="https://wa.me/5571999771646?text=Olá%2C+Mariana!+Gostaria+de+agendar+uma+sessão."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-secondary transition-colors"
        >
          <MessageCircle size={24} />
        </Link>
      </motion.div>
    </motion.div>
  )
}
