"use client"

import { motion } from "framer-motion"

export default function Approach() {
  return (
    <section id="abordagem" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">GESTALT-TERAPIA</h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            A Gestalt-terapia é uma abordagem centrada no aqui e agora, que favorece o desenvolvimento de consciência
            sobre emoções, pensamentos e modos de agir, o que permite que você compreenda como constrói as suas
            experiências no presente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: "🎯",
              title: "Foco no aqui e agora",
              description:
                "Olhar para o que está acontecendo no momento presente (as emoções, os pensamentos, o corpo e as relações), porque é nesse instante que as experiências se tornam compreensíveis e transformáveis.",
            },
            {
              icon: "💡",
              title: "Consciência e responsabilidade",
              description:
                "Ter consciência para notar o que acontece em você, e responsabilidade ao reconhecer o que pode fazer com isso. Não é um processo de culpa, mas de possibilidades.",
            },
            {
              icon: "🛡️",
              title: "Limites saudáveis",
              description: "Aprender a estabelecer e respeitar seus próprios limites de forma assertiva.",
            },
            {
              icon: "🦋",
              title: "Autonomia e liberdade",
              description:
                "Ter a possibilidade de escolher com mais clareza, em vez de repetir padrões ou responder automaticamente às expectativas de outras pessoas.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-muted rounded-2xl hover:bg-accent transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-foreground leading-relaxed text-justify">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
