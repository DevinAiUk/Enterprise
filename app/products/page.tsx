'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Simple Starter App',
    price: 299.99,
    features: [
      'Basic UI/UX Design',
      'Essential Features',
      'Basic Authentication',
      '3 Months Support',
      'Basic Analytics',
    ],
    popular: false,
  },
  {
    name: 'Basic App',
    price: 499.99,
    features: [
      'Professional UI/UX Design',
      'Advanced Features',
      'Social Authentication',
      '6 Months Support',
      'Advanced Analytics',
      'Push Notifications',
    ],
    popular: true,
  },
  {
    name: 'Enterprise App',
    price: 2999.99,
    features: [
      'Premium UI/UX Design',
      'Custom Features',
      'Enterprise Authentication',
      '12 Months Support',
      'Advanced Analytics',
      'Push Notifications',
      'Custom Integrations',
      'Dedicated Account Manager',
    ],
    popular: false,
  },
  {
    name: 'Freelance Plan',
    price: 399.99,
    features: [
      'Professional UI/UX Design',
      'Custom Features',
      'Basic Authentication',
      '4 Months Support',
      'Basic Analytics',
      'Email Support',
    ],
    popular: false,
  },
];

function PricingCard({ plan, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`p-6 relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <div className="text-3xl font-bold mb-4">
            ${plan.price}
            <span className="text-sm font-normal text-muted-foreground">/project</span>
          </div>
          <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
            Get Started
          </Button>
        </div>
        <div className="space-y-3">
          {plan.features.map((feature: string) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function ProductsPage() {
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
              Choose Your Perfect App
            </h1>
            <p className="text-xl text-muted-foreground">
              Select from our range of customizable app development packages designed to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-8">
              * Remember, these are just ballpark figures. The actual market value of your app will depend on specific factors, such as complexity, user base, monetization strategy, and demand.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us for More Info</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need a Custom Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your specific requirements and create a tailored solution for your business.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}