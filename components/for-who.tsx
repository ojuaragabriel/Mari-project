"use client"

import { motion } from "framer-motion"

export default function ForWho() {
  const topics = [
    {
      title: "Ansiedade e estresse",
      description:
        "Compreender como a ansiedade se forma nas suas relações e construir maneiras mais cuidadosas de lidar com o estresse.",
    },
    {
      title: "Autoestima e autoconhecimento",
      description:
        "Reconhecer como você se vê, como se trata, e fortalecer uma relação mais honesta e gentil consigo.",
    },
    {
      title: "Relacionamentos",
      description:
        "Perceber padrões que se repetem nas suas relações e criar vínculos mais verdadeiros, seguros e possíveis.",
    },
    {
      title: "Identidade de gênero e orientação sexual",
      description:
        "Explorar como você se reconhece e se afirma no mundo, considerando seus desejos, limites e as expectativas que te atravessam.",
    },
    {
      title: "Luto e transições",
      description:
        "Acompanhar perdas, rupturas e mudanças importantes com espaço para sentir, nomear e elaborar no seu tempo.",
    },
    {
      title: "Carreira e desenvolvimento acadêmico",
      description:
        "Perceber como você se relaciona com trabalho e estudo, reconhecendo limites, desejos e possibilidades reais.",
    },
  ]

  return (
    <section id="para-quem" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Título + balões de público-alvo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">PÚBLICO-ALVO</h2>

          {/* Balões */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* MULHERES */}
            <div className="rounded-[2rem] bg-background shadow-md overflow-hidden max-w-md mx-auto">
              <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold tracking-wide">MULHERES</h3>
              </div>
              <div className="px-6 py-5 text-left text-sm sm:text-base text-foreground leading-relaxed">
                <p>
                  Ser mulher implica atravessar estruturas que moldam nossa maneira de viver, sentir
                  e nos relacionar. E reconhecer isso é parte do cuidado. Na psicoterapia, posso
                  apoiar processos de fortalecimento, ampliar consciência sobre essas dinâmicas,
                  sustentar escolhas mais livres e acompanhar caminhos de autonomia e presença no
                  mundo.
                </p>
              </div>
            </div>

            {/* PESSOAS LGBTQIA+ */}
            <div className="rounded-[2rem] bg-background shadow-md overflow-hidden max-w-md mx-auto">
              <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                  PESSOAS LGBTQIA+
                </h3>
              </div>
              <div className="px-6 py-5 text-left text-sm sm:text-base text-foreground leading-relaxed">
                <p>
                  Ser LGBTQIA+ é construir experiências fora das normas que tentam definir como
                  devemos viver, sentir e nos relacionar. Mesmo que gênero ou sexualidade não sejam
                  o foco do seu processo, seu caminho é singular e merece ser acolhido com
                  responsabilidade. Na psicoterapia, sustento um espaço seguro e afirmativo, onde
                  sua experiência é reconhecida e onde todos os temas da sua vida podem ser trazidos
                  com liberdade.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtítulo temas comuns */}
        <div className="text-center mb-10">
          <h3 className="font-bold text-primary text-4xl">TEMAS COMUNS NA CLÍNICA</h3>
        </div>

        {/* Cards de temas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-primary mb-3 text-left text-lg">
                {topic.title}
              </h3>
              <p className="text-foreground leading-relaxed text-left">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
