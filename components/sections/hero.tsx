'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Cpu, Database, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AiGridIcons = () => {
  const icons = [
    { Icon: Brain, title: 'Neural Networks' },
    { Icon: Cpu, title: 'Processing Power' },
    { Icon: Database, title: 'Big Data' },
    { Icon: Network, title: 'Deep Learning' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      {icons.map(({ Icon, title }, index) => (
        <motion.div
          key={title}
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container relative z-10 px-4 py-32 mx-auto text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
            Enterprise AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Transform your business with cutting-edge artificial intelligence
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
        
        <AiGridIcons />
        
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(88,28,255,0.2) 0%, rgba(88,28,255,0) 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </section>
  );
}