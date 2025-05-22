"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          
          <nav className="hidden md:flex md:space-x-6 lg:space-x-8">
            <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Cómo Funciona
            </Link>
            <Link href="#productos" className="text-sm font-medium hover:text-primary transition-colors">
              Productos
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link href="#contacto">
                Solicita tu demo
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              href="#servicios" 
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="#como-funciona" 
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Cómo Funciona
            </Link>
            <Link 
              href="#productos" 
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link 
              href="#contacto" 
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild variant="default" className="w-full mt-4 bg-primary hover:bg-primary/90">
              <Link 
                href="#contacto"
                onClick={() => setIsOpen(false)}
              >
                Solicita tu demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}