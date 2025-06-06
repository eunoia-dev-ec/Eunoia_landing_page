"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Mail, Phone, Map, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  company: z.string().min(2, {
    message: "La empresa debe tener al menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres",
  }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto contigo pronto",
      });
      
      // Reset form after showing success message
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="stagger-item text-center mb-12"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicita tu Demo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contáctanos para una demostración personalizada o para recibir más información
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div 
            className="stagger-item w-full hover:scale-[1.03] transition-transform duration-300 hover:shadow-xl"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <div className="bg-card rounded-2xl shadow-md p-8 border ">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 p-4 mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-muted-foreground mb-6">
                    Gracias por contactarnos. Nos pondremos en contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu nombre" {...field} className="focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Nombre de tu empresa" {...field} className="focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="tu@email.com" {...field} className="focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono (opcional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+593 XXX XXX XXXX" {...field} className="focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="¿Qué servicios te interesan? ¿Tienes alguna pregunta específica?"
                              className="min-h-32 resize-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar Demo"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
          
          <div 
            className="stagger-item w-full md:mt-0"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="group flex items-start p-3 rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-200">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contacto@eunoia.click" className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        contacto@eunoia.click
                      </a>
                    </div>
                  </div>
                  
                  <div className="group flex items-start p-3 rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-200">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <a href="tel:+593983837655" className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        +593 98 383 7655
                      </a>
                    </div>
                  </div>
                  
                  <div className="group flex items-start p-3 rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-200">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Map className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-muted-foreground">
                        Pasaje B n45-52 y Av. Zamora
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start p-3 rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-200">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a href="https://wa.me/593988512228" className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        +593 98 851 2228
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}