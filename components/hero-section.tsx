"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageSquare, Bot, Zap } from "lucide-react";

export function HeroSection() {
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

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background z-0" />
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">

          
          <h1 
            className="stagger-item text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Euno<span className="text-accent">ia</span>  <br className="hidden sm:inline" />
            <span className="text-primary">Tecnología que conecta y transforma</span>
          </h1>
          
          <p 
            className="stagger-item text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            Impulsamos el crecimiento de las PYMEs latinoamericanas con soluciones de IA conversacional 
            y automatización accesible. Conecta WhatsApp, Instagram y Facebook Messenger con tecnología inteligente.
          </p>
          
          <div 
            className="stagger-item flex flex-col sm:flex-row gap-4 justify-center mb-12"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              <Link href="#contacto">
                Solicita tu demo gratis <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200">
              <Link href="#servicios">
                Conoce nuestros servicios
              </Link>
            </Button>
          </div>
          
          <div 
            className="stagger-item grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            ref={(el) => (elementsRef.current[4] = el)}
          >
            <div className="p-6 rounded-xl bg-card shadow-sm border hover:scale-105 transition-transform duration-200">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Integraciones sin código</h3>
              <p className="text-sm text-muted-foreground">Conecta tus plataformas de mensajería sin necesidad de programación.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card shadow-sm border hover:scale-105 transition-transform duration-200">
              <Bot className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">IA en Español</h3>
              <p className="text-sm text-muted-foreground">Modelos optimizados para español latinoamericano y jerga local.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card shadow-sm border hover:scale-105 transition-transform duration-200">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Soporte Local</h3>
              <p className="text-sm text-muted-foreground">Equipo técnico en Ecuador para implementación y soporte.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}