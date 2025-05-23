import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eunoia Soluciones | Tecnología que conecta y transforma',
  description: 'Automatización inteligente y chatbots omnicanal para tu negocio en Ecuador. Soluciones de WhatsApp, Instagram y Facebook Messenger para PYMEs.',
  icons: {
    icon: '/Logo-light.png',
    apple: '/Logo-light.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <div className="fixed bottom-4 left-4 z-50 p-2 bg-background/80 backdrop-blur rounded-full border">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}