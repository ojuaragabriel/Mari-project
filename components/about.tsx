"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: "/mariana-consultorio-1.jpg", alt: "Mariana em seu consultório" },
    { src: "/mariana-consultorio-3.jpeg", alt: "Mariana palestra" },
    { src: "/mariana-consultorio-2.jpg", alt: "Mariana no espaço de atendimento" },
    { src: "/mariana-consultorio-4.jpg", alt: "Mariana webcam" },
    { src: "/mariana-consultorio-5.jpg", alt: "Mariana sofá" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-[0.18em] md:tracking-[0.25em] mb-4">
            SOBRE MIM
          </h2>
        </motion.div>

        {/* Grade principal: imagem à esquerda, texto + cards à direita */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Carrossel de imagens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md md:max-w-lg relative overflow-hidden rounded-2xl shadow-lg bg-background">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full"
                >
                  <Image
                    src={images[currentImageIndex].src || "/placeholder.svg"}
                    alt={images[currentImageIndex].alt}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Indicadores do carrossel */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white w-6" : "bg-white/50 w-2"
                    }`}
                    aria-label={`Imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Texto + cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-foreground leading-relaxed text-pretty text-justify md:text-justify">
              Prazer, me chamo Mariana. Sou psicóloga clínica (CRP 03/30333), pós-graduada em
              Gestalt-terapia (UNIGRAD) e mestranda em Estudos sobre Mulheres, Gênero e Feminismo
              (PPGNEIM) pela Universidade Federal da Bahia (UFBA). Meu trabalho é pautado em escuta
              qualificada, ética profissional e um compromisso genuíno com o bem-estar de cada
              pessoa que me procura. Acredito que a terapia é um espaço seguro de transformação
              pessoal, onde você pode ser autêntico(a) e encontrar suas próprias respostas com um
              suporte profissional qualificado.
            </p>

            {/* Cards – mobile mais estreito/centralizado, desktop igual ao original */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:max-w-none md:mx-0">
              <div className="p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3 text-left">
                  Escuta qualificada
                </h3>
                <p className="text-foreground leading-relaxed text-left">
                  Uma escuta que respeita o tempo de cada pessoa e acompanha caminhos de cuidado,
                  reconstrução e fortalecimento.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3 text-left">
                  Ética profissional
                </h3>
                <p className="text-foreground leading-relaxed text-left">
                  Uma ética comprometida com a dignidade humana e com a não-violência, com atenção
                  aos atravessamentos que marcam a sua experiência.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                <h3 className="text-xl font-semibold text-primary mb-3 text-left md:text-center">
                  Acolhimento genuíno
                </h3>
                <p className="text-foreground leading-relaxed text-left md:text-justify">
                  Um acolhimento que reconhece a coragem presente na vulnerabilidade e oferece
                  presença, verdade e cuidado a quem chega.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
