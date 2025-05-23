"use client";

import { useEffect, useRef } from "react";
import { MessageSquareText, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const steps = [
    {
      title: "Conecta tus cuentas",
      description: "Integra fácilmente WhatsApp, Instagram, Facebook Messenger y más plataformas a través de nuestra interfaz intuitiva.",
      icon: <MessageSquareText className="h-10 w-10" />,
      color: "text-primary",
      bgColor: "bg-primary/10 dark:bg-primary/20"
    },
    {
      title: "Configura tu bot",
      description: "Personaliza respuestas, flujos de conversación y automatizaciones según las necesidades específicas de tu negocio.",
      icon: <Settings className="h-10 w-10" />,
      color: "text-accent",
      bgColor: "bg-accent/10 dark:bg-accent/20"
    },
    {
      title: "Automatiza conversaciones",
      description: "Deja que la IA gestione consultas frecuentes mientras tú te concentras en lo que realmente importa para tu negocio.",
      icon: <Zap className="h-10 w-10" />,
      color: "text-primary",
      bgColor: "bg-primary/10 dark:bg-primary/20"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="stagger-item text-center mb-16"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Implementa soluciones de automatización en minutos con estos simples pasos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="stagger-item relative z-10 hover:scale-105 transition-transform duration-200"
              ref={(el) => (elementsRef.current[index + 1] = el)}
            >
              <div className="flex flex-col items-center text-center">
                <div className={cn(
                  "flex items-center justify-center w-20 h-20 rounded-full mb-6",
                  step.bgColor
                )}>
                  <div className={cn("flex items-center justify-center", step.color)}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="gradient-border bg-card w-full p-6 pt-12">
                  <span className="block text-lg font-semibold mb-1">Paso {index + 1}</span>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}