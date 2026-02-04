
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Generator from './components/Generator';
import UseCases from './components/UseCases';
import ImagePrompts from './components/ImagePrompts';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Youtube } from 'lucide-react';

const Features = () => (
  <section id="features" className="py-24 px-4 bg-[#050505]">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            Designed for the <br /> 
            <span className="text-indigo-500">USD Mindset.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We don't just generate prompts. We engineer results. Every output is structured to get the maximum performance out of any LLM or Image Model.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Premium Engineering</h4>
                <p className="text-gray-500 text-sm">Professional grade structures used by top AI researchers globally.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <Clock className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Instant Efficiency</h4>
                <p className="text-gray-500 text-sm">Save hours of trial and error. Get the perfect result on your first try.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-600/20 blur-[100px]" />
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
              <div className="flex-1">
                <div className="h-4 w-32 bg-white/10 rounded-full mb-2" />
                <div className="h-3 w-20 bg-white/5 rounded-full" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/10 rounded-full" />
              <div className="h-4 w-5/6 bg-white/10 rounded-full" />
              <div className="h-4 w-4/6 bg-white/10 rounded-full" />
              <div className="h-20 w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                 <Zap className="w-8 h-8 text-indigo-500 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 px-4 bg-[#030303]">
    <div className="max-w-6xl mx-auto">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-gray-400">Master AI in three simple, high-performance steps.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Select Need", desc: "Choose your target AI tool and describe the specific goal you want to achieve." },
            { step: "02", title: "Optimize Parameters", desc: "Adjust tone, skill level, and output type to fine-tune the engine's logic." },
            { step: "03", title: "Deploy Output", desc: "Get an engineered prompt ready to deliver world-class results instantly." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-10 rounded-3xl bg-white/2 border border-white/5 relative overflow-hidden group"
            >
              <span className="text-6xl font-display font-black text-white/5 absolute -top-2 -left-2 group-hover:text-indigo-500/10 transition-colors">{item.step}</span>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-500 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
    </div>
  </section>
);

const YouTubeCTA = () => (
  <section className="py-24 px-4 bg-black relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-12 md:p-16 rounded-[48px] border border-white/10 flex flex-col items-center gap-8 shadow-2xl"
      >
        <div className="w-24 h-24 bg-red-600 rounded-[32px] flex items-center justify-center shadow-2xl shadow-red-600/30">
          <Youtube className="w-12 h-12 text-white" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">Level up your AI game</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Deep dives, prompt secrets, and workflow hacks delivered weekly to your feed.
          </p>
        </div>
        <a 
          href="https://www.youtube.com/@RudraPratap-l4o2e" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 bg-white text-black px-12 py-6 rounded-3xl font-black text-2xl hover:bg-gray-100 transition-all active:scale-95 shadow-2xl shadow-white/5"
        >
          Subscribe Now
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Youtube className="w-6 h-6 text-white" />
          </div>
        </a>
      </motion.div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto glass-panel p-16 rounded-[40px] border border-white/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none" />
      <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-8 relative z-10 leading-tight">
        Stop Guessing. <br /> Start Generating.
      </h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
        Join the elite circle of professionals using engineered prompts to stay ahead of the competition.
      </p>
      <div className="relative z-10">
        <a 
          href="#generator"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-white/5 group"
        >
          Try Prompt Generator
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Generator />
      <Features />
      <Process />
      <ImagePrompts />
      <UseCases />
      <YouTubeCTA />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
