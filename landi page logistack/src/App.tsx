/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, Zap, ShoppingCart, ShieldCheck } from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-electric-blue selection:text-white overflow-x-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-blue opacity-[0.03] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-electric-blue opacity-[0.03] blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/60 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter"
          >
            LOGISTACK
          </motion.h1>
          <motion.a
            href="https://wa.me/5577981531398"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, backgroundColor: '#0070f3', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border-2 border-electric-blue text-electric-blue text-sm font-bold rounded-full transition-all duration-300 inline-block"
          >
            Falar com o Criador
          </motion.a>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-12 py-32 md:py-48 flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-[55px] md:text-[90px] font-black leading-[0.85] tracking-tighter uppercase mb-10"
            >
              A VITRINE DE ELITE <br />
              <span className="text-white/30 italic">QUE VOCÊ PRECISA</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-16"
            >
              Venda fora dos marketplaces saturados, sem taxas abusivas e com carregamento instantâneo. 
              <span className="text-white font-medium italic underline underline-offset-8 decoration-electric-blue decoration-2 ml-2">Tecnologia Sniper</span> para lojistas de verdade.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.a
                href="https://wa.me/5577981531398"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(0, 112, 243, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-7 bg-electric-blue rounded-full text-white font-black text-xl tracking-tight flex items-center gap-4 transition-all duration-500 shadow-[0_0_40px_rgba(0,112,243,0.3)]"
              >
                <MessageCircle size={32} fill="white" className="drop-shadow-sm" />
                QUERO MINHA VITRINE AGORA
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Differentials Section */}
        <section className="px-12 py-32 border-y border-white/[0.03]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { 
                  icon: <Zap size={24} />, 
                  title: 'Velocidade Absurda', 
                  desc: 'Carregamento em milissegundos focado em conversão mobile.' 
                },
                { 
                  icon: <ShoppingCart size={24} />, 
                  title: 'Checkout de 1 Clique', 
                  desc: 'Não perca vendas com processos demorados e formulários.' 
                },
                { 
                  icon: <ShieldCheck size={24} />, 
                  title: 'Controle Total', 
                  desc: 'Gestão via Supabase/Vercel direto no seu painel exclusivo.' 
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="group flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-gray-800 rounded-xl group-hover:border-electric-blue transition-colors duration-500 text-electric-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-tight max-w-[240px] mx-auto text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-12 py-48 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              Pronto para a Elite?
            </h2>
            <motion.a
              href="https://wa.me/5577981531398"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(0, 112, 243, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-14 py-8 bg-electric-blue rounded-full text-white font-black text-2xl tracking-tight flex items-center gap-5 transition-all duration-500 shadow-[0_0_50px_rgba(0,112,243,0.4)]"
            >
              <MessageCircle size={36} fill="white" className="animate-pulse" />
              INICIAR ESCALADA
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-12 py-10 border-t border-gray-900 bg-[#000000]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-700 font-bold">
            Logistack © 2026 — Onde os grandes players escalam.
          </span>
        </div>
      </footer>
    </div>
  );
}
