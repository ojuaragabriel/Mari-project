"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    // MUDANÇA 1: Removemos h-screen ou alturas fixas. A seção agora é apenas um container relativo.
    <section className="relative w-full bg-stone-900 overflow-hidden">
      
      {/* 1. A IMAGEM (Ela define a altura da seção agora) */}
      {/* Removemos a div 'absolute' que envolvia a imagem */}
      <img 
        src="/images/design-mode/IMG_4630%20%281%29(1).jpg" 
        alt="Mariana Alves André - Psicóloga" 
        // MUDANÇA 2: 
        // - 'w-full h-auto': A largura é total, a altura é automática (proporcional).
        // - Removemos 'object-cover' e 'object-top' pois não queremos cortar nada.
        // - 'block': Garante que ela se comporte como um bloco para ditar a altura do pai.
        className="relative z-0 w-full h-auto block mx-0 tracking-normal py-[-px] py-[-] py-[-10px] my-[-598px]" 
      />

      {/* Gradiente Overlay (Precisa ser absolute para ficar por cima) */}
      {/* Adicionei 'pointer-events-none' para não bloquear cliques nos botões se o gradiente for muito alto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

      {/* 2. CONTEÚDO (Posicionado absolutamente na parte inferior) */}
      {/* MUDANÇA 3: Adicionamos 'absolute bottom-0 left-0' para fixar o conteúdo sobre a imagem */}
      <div className="absolute z-20 bottom-0 left-0 w-full px-4 pb-12 sm:pb-16 text-center flex justify-center md:pb-[70px] my-[66px]">
        <motion.div
          // Ajustei a animação inicial para ser mais sutil, já que a altura é variável
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl border-[0] tracking-normal leading-7" // Limita a largura do texto em telas muito grandes
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-tight drop-shadow-lg px-0 mb-2 lg:text-7xl font-medium">
            Psicoterapia online
          </h1>

          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 font-light drop-shadow-md md:text-3xl">
            para mulheres e pessoas LGBTQIA+
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="https://wa.me/5571999771646?text=Olá%2C+Mariana!+Gostaria+de+agendar+uma+sessão."
                target="_blank"
                rel="noopener noreferrer"
                // Ajustei padding e tamanho da fonte para se adaptar melhor em diferentes alturas de imagem
                className="inline-block w-full sm:w-auto min-w-[180px] px-6 py-3 bg-[#3E2C1C]/90 hover:bg-[#3E2C1C] text-white/95 rounded-2xl transition-colors font-medium border border-white/10 backdrop-blur-sm text-sm sm:text-base"
              >
                agendar primeira sessão
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="#abordagem"
                className="inline-block w-full sm:w-auto min-w-[180px] px-6 py-3 bg-[#3E2C1C]/90 hover:bg-[#3E2C1C] text-white/95 rounded-2xl transition-colors font-medium border border-white/10 backdrop-blur-sm text-sm sm:text-base"
              >
                conhecer a abordagem
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
