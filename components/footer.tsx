"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return ( 
    <footer id="contato" className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-[46px] gap-8 lg:gap-12">
          {/* Info */}
          <motion.div
            className="mx-1.5 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/design-mode/ma.png"
              alt="Logo Mariana Alves André"
              className="h-12 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <h3 className="text-xl font-semibold mb-2">Mariana Alves André</h3>
            <p className="text-sm opacity-90">Psicóloga | CRP 03/30333</p>
            <p className="text-sm opacity-90">Salvador, BA</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/5571999771646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors flex items-center justify-center md:justify-start flex-wrap gap-2 text-sm sm:text-base"
                  >
                    <span className="text-accent">WhatsApp:</span>
                    <span className="whitespace-nowrap">+55 71 99977-1646</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:alvesmarianapsi@gmail.com"
                    className="hover:text-accent transition-colors flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base"
                  >
                    <span className="text-accent">Email:</span>
                    <span className="break-all sm:break-normal">alvesmarianapsi@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="border-0 mx-0 md:mx-[22px] my-0 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">Redes Sociais</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com/psimarialves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base"
                  >
                    <Instagram size={20} /> @psimarialves
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="mb-4 font-bold text-xl">Links Rápidos</h4>
            <div className="space-y-2 text-sm sm:text-base">
              <Link href="#sobre" className="block hover:opacity-80 transition-opacity">
                Sobre
              </Link>
              <Link href="#abordagem" className="block hover:opacity-80 transition-opacity">
                Abordagem
              </Link>
              <Link href="#faq" className="block hover:opacity-80 transition-opacity">
                Perguntas frequentes 
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Mariana Alves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
