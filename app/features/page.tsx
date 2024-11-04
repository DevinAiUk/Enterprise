'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import {
  Brain,
  Shield,
  Zap,
  BarChart,
  Lock,
  Cloud,
  Settings,
  Users,
  LineChart,
  Database,
  Bot,
  Network,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Processing',
    description: 'State-of-the-art neural networks and machine learning algorithms for intelligent decision-making.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and security protocols to protect your sensitive data.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless integration with major cloud providers for scalable and reliable performance.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2940&auto=format&fit=crop',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Advanced data processing and storage solutions with real-time analytics capabilities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop',
  },
];

const additionalFeatures = [
  {
    icon: Bot,
    title: 'Automated Workflows',
    description: 'Streamline operations with intelligent automation and process optimization.',
  },
  {
    icon: Network,
    title: 'API Integration',
    description: 'Connect with existing systems through our comprehensive API ecosystem.',
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with advanced analytics.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enhanced tools for team coordination and project management.',
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Tailor the platform to your specific business needs and workflows.',
  },
  {
    icon: Lock,
    title: 'Compliance',
    description: 'Meet industry standards with built-in compliance and governance features.',
  },
];

function FeatureCard({ feature, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden group">
        <div className="relative h-48">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="p-6">
          <feature.icon className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

function AdditionalFeatureCard({ feature, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <feature.icon className="w-8 h-8 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </Card>
    </motion.div>
  );
}

export default function FeaturesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Features
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our comprehensive suite of features designed to transform your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <AdditionalFeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with our enterprise AI solutions today.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}