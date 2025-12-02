'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sofia',
      text: 'Mariana me ajudou a compreender padrões que eu carregava há anos. O atendimento foi acolhedor, respeitoso e muito profissional. Recomendo!',
      rating: 5,
    },
    {
      name: 'Julia',
      text: 'Como mulher LGBTQIA+, me sentia segura e compreendida. A abordagem Gestalt realmente me ajudou a viver o presente sem carregar tanto o passado.',
      rating: 5,
    },
    {
      name: 'Amanda',
      text: 'Procurei ajuda para ansiedade e a terapia com Mariana transformou minha vida. Sou grata pela dedicação e empatia dela.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Depoimentos</h2>
          <p className="text-sm text-muted-foreground">Nomes fictícios para preservação de sigilo</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-background rounded-2xl shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
