import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24 min-h-screen flex flex-col justify-center items-center', className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
