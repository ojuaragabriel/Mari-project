"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Contato pelo whatsApp",
      description:
        "Me envie uma mensagem com os seus melhores horários. Eu retorno assim que possível para alinharmos os próximos passos.",
    },
    {
      number: "02",
      title: "Primeira sessão",
      description:
        "Esse primeiro encontro serve para você contar um pouco da sua história. É um momento de acolhimento e orientação.",
    },
    {
      number: "03",
      title: "Acompanhamento contínuo",
      description:
        "Ao longo das sessões, vamos acompanhando como você se movimenta nas suas relações e no seu cotidiano. O trabalho continua sessão a sessão, respeitando seu ritmo, suas necessidades e o que vai emergindo no percurso.",
    },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-background py-[50px]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 px-[5px] py-0">COMO FUNCIONA </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 bg-muted rounded-2xl h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="font-semibold text-primary mb-3 text-lg">{step.title}</h3>
                <p className="text-foreground leading-relaxed text-left">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 text-primary">
                  <ArrowRight size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
