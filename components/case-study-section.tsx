"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export function CaseStudySection() {
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30 z-0" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div 
          className="stagger-item text-center mb-12"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empresas ecuatorianas que ya están transformando su comunicación con clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className="stagger-item hover:scale-[1.03] transition-transform duration-300 hover:shadow-xl rounded-2xl overflow-hidden"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <div className="relative w-full h-full">
              <Image 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cliente utilizando la plataforma Eunoia" 
                width={600} 
                height={400}
                className="object-cover w-full h-full aspect-video"
              />
            </div>
          </div>
          
          <div 
            className="stagger-item hover:scale-[1.03] transition-transform duration-300 hover:shadow-xl"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-8">
                  "Con Eunoia Soluciones logramos reducir nuestros tiempos de respuesta en un 78% y aumentar la satisfacción de nuestros clientes. La automatización de WhatsApp nos permitió escalar nuestro servicio sin incrementar personal."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Foto de perfil" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Marcela Paredes</h4>
                    <p className="text-sm text-muted-foreground">Gerente de Marketing, EcuaMarket</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">78%</p>
                      <p className="text-sm text-muted-foreground">Reducción en tiempo de respuesta</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">45%</p>
                      <p className="text-sm text-muted-foreground">Incremento en conversiones</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">24/7</p>
                      <p className="text-sm text-muted-foreground">Disponibilidad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}