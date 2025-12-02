"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona a psicoterapia on-line?",
      answer:
        "A psicoterapia online acontece por videochamada pelo Google Mee, em um ambiente reservado e protegido por sigilo. Você só precisa de um dispositivo com internet para acessar o encontro no horário combinado.",
    },
    {
      question: "Qual é a duração e frequência das sessões?",
      answer:
        "As sessões duram, em média, 50 minutos a 1 hora. Especialmente no início do processo, é importante que as sessões ocorram semanalmente, gerando um vínculo entre terapeuta e paciente bem estabelecido.",
    },
    {
      question: "Como funciona o sigilo e a ética profissional?",
      answer:
        "O sigilo garante que tudo dito em sessão permanece confidencial, sendo quebrado apenas em situações legais ou de risco iminente à vida (Código de Ética do Psicólogo, 2005).",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Você pode realizar pix ou transferência bancária, e podemos combinar a forma que melhor se adequa a você no primeiro contato.",
    },
    {
      question: "Qual é a política de cancelamento e remarcação?",
      answer:
        "Os cancelamentos ou remarcações devem ser informados com pelo menos 24 horas de antecedência, ajudando a reorganizar a agenda.",
    },
    {
      question: "Emite recibo para reembolso?",
      answer:
        "Sim, emito recibos através do Receita Saúde. Você pode usá-los para reembolso com o seu convênio ou plano de de saúde.",
    },
  ]

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 bg-background py-9">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">PERGUNTAS FREQUENTES </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 bg-muted rounded-2xl hover:bg-accent transition-colors text-left"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="font-semibold text-primary">{faq.question}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={20} className="text-primary flex-shrink-0" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-background border border-border border-t-0 text-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
