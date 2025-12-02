"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function VideoSection() {
  const googleDriveFileId = "1EB8gMUTk3wybFb-DLKAHZt29aB9GvFug"

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
                allow="autoplay"
                allowFullScreen
                title="Vídeo de apresentação"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              {"CONHEÇA MEU TRABALHO"}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6 text-center">
              Um breve vídeo de apresentação sobre minha prática clínica e como
              posso te acompanhar ao longo do processo terapêutico.
            </p>
            <Link
              href="https://wa.me/5571999771646?text=Olá%2C+Mariana!+Gostaria+de+agendar+uma+sessão."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-6 py-3 text-primary-foreground hover:bg-secondary transition-colors font-medium text-left"
            >
              Agendar sessão
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
