'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'AI Tools',
    description: 'TeamBoost is an AI-driven tool that enhances team collaboration, communication, and task management for increased efficiency and output.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Collaboration Software',
    description: 'TaskOptimize offers personalized task prioritization, scheduling, and automation features to streamline workflows and boost productivity.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Performance Optimization',
    description: 'CollabSync facilitates seamless project collaboration by integrating communication, file sharing, and feedback systems in one innovative platform.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2940&auto=format&fit=crop',
  },
];

const SolutionCard = ({ title, description, image, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden group h-full">
        <div className="relative h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button variant="ghost" className="group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export function SolutionsSection() {
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
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solutions</h2>
          <p className="text-xl text-muted-foreground">
            Explore our cutting-edge AI tools designed to enhance workplace performance, collaboration, and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/products">View All Solutions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}