"use client";

import Link from "next/link";
import { MessageSquare, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Eunoia</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Soluciones de automatización inteligente y chatbots omnicanal para tu negocio.
            </p>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Automatización de WhatsApp
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Bots para Instagram
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Bots para Facebook Messenger
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Desarrollo a Medida
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Eunexus
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Integraciones a Medida
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API de Comunicaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Panel de Analítica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-muted-foreground">Email:</span>
                <a href="mailto:contacto@eunoia.click" className="ml-2 hover:text-primary transition-colors">
                  contacto@eunoia.click
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-muted-foreground">Teléfono:</span>
                <a href="tel:+593983837655" className="ml-2 hover:text-primary transition-colors">
                  +593 98 383 7655
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-muted-foreground">Dirección:</span>
                <span className="text-sm">
                  Pasaje B n45-52 y Av. Zamora
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Eunoia Soluciones. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Términos de Uso
              </Link>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}