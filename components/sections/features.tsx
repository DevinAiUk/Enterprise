'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, BarChart, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade security with end-to-end encryption',
    icon: Shield,
  },
  {
    title: 'Real-time Processing',
    description: 'Lightning-fast AI processing for instant results',
    icon: Zap,
  },
  {
    title: 'Smart Analytics',
    description: 'Deep insights powered by machine learning',
    icon: BarChart,
  },
  {
    title: 'Data Privacy',
    description: 'GDPR compliant data handling and storage',
    icon: Lock,
  },
];

const FeatureCard = ({ title, description, icon: Icon, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group hover:scale-105 transform">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Enterprise Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI solutions come packed with enterprise-grade features designed to
            transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}