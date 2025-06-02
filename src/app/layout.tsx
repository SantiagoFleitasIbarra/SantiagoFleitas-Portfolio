import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ParticleBackground } from '@/components/layout/ParticleBackground';
import { Toaster } from "@/components/ui/toaster" // For AI summary notifications

export const metadata: Metadata = {
  title: 'Cosmic Portfolio - Santiago Fleitas',
  description: 'Portfolio profesional de Santiago Fleitas - Desarrollador Full Stack e Ingeniero en Computación.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <LanguageProvider>
          <ParticleBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
