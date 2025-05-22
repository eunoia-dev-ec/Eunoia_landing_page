"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Plug, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductsSection() {
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

  const products = [
    {
      title: "Eunexus",
      description: "Plataforma RAG/CAG para entrenamiento de chatbots con tu propio historial de conversaciones. Crea agentes de IA personalizados para tu negocio.",
      icon: <Brain className="h-10 w-10" />,
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Entrena con tu base de conocimiento",
        "Personalización de respuestas",
        "Mejora continua con Machine Learning",
        "Integración con plataformas de mensajería"
      ]
    },
    {
      title: "Integraciones a medida",
      description: "Soluciones personalizadas que conectan tus sistemas actuales con canales de comunicación. Plugins y APIs para una experiencia omnicanal completa.",
      icon: <Plug className="h-10 w-10" />,
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        "Conexión con CRMs y ERPs",
        "APIs personalizadas",
        "Webhooks configurables",
        "Paneles de análisis a medida"
      ]
    }
  ];

  return (
    <section id="productos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="stagger-item text-center mb-16"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Productos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestras soluciones tecnológicas diseñadas para transformar la comunicación de tu negocio
          </p>
        </div>
        
        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={index}
              className={cn(
                "stagger-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              )}
              ref={(el) => (elementsRef.current[index + 1] = el)}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className={cn(
                  "inline-flex items-center justify-center rounded-full p-3 mb-6",
                  product.bgColor
                )}>
                  <div className={product.color}>
                    {product.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="rounded-full bg-primary/10 p-1 mr-3">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="#contacto">
                    Solicitar información <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className={cn(
                "rounded-2xl overflow-hidden shadow-lg border",
                index % 2 === 1 ? "md:col-start-1" : ""
              )}>
                <Image 
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}