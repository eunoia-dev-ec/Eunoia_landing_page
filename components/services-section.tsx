"use client";

import { useEffect, useRef } from "react";
import { 
  MessageCircle, 
  Instagram, 
  Code, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServicesSection() {
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
  
  const services = [
    {
      title: "Automatización de WhatsApp",
      description: "Conecta tu negocio con WhatsApp Business Cloud API y automatiza conversaciones con clientes en tiempo real.",
      icon: <MessageCircle className="h-12 w-12 text-primary" />,
      features: [
        "Chatbots inteligentes para atención 24/7",
        "Respuestas automáticas personalizadas",
        "Integración con tu CRM o sistema actual",
        "Analítica de conversaciones"
      ],
      className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20",
      iconClass: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Bots para Instagram y Messenger",
      description: "Gestiona mensajes directos en tus redes sociales con respuestas automáticas inteligentes y flujos de conversación personalizados.",
      icon: <Instagram className="h-12 w-12 text-accent" />,
      features: [
        "Automatización de DMs en Instagram",
        "Respuestas a comentarios y menciones",
        "Campañas automatizadas en Messenger",
        "Panel unificado de gestión"
      ],
      className: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/20",
      iconClass: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      title: "Desarrollo a Medida",
      description: "Soluciones personalizadas para tu negocio, integrando múltiples canales y sistemas en un solo flujo de trabajo.",
      icon: <Code className="h-12 w-12 text-primary" />,
      features: [
        "Integración con tus sistemas actuales",
        "Flujos de trabajo personalizados",
        "Consultorías técnicas especializadas",
        "Escalabilidad garantizada"
      ],
      className: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/40 dark:to-gray-800/20",
      iconClass: "bg-gray-100 dark:bg-gray-800/30"
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="stagger-item text-center mb-12"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones de automatización inteligente para comunicación omnicanal en Ecuador
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "stagger-item rounded-2xl p-6 border transition-all duration-300 hover:shadow-md",
                service.className
              )}
              ref={(el) => (elementsRef.current[index + 1] = el)}
            >
              <div className={cn("rounded-full p-3 inline-flex mb-6", service.iconClass)}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="ghost" className="w-full">
                <Link href="#contacto">
                  Saber más <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div 
          className="stagger-item text-center"
          ref={(el) => (elementsRef.current[4] = el)}
        >
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
            <Link href="#contacto">
              Solicita una demostración personalizada
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}