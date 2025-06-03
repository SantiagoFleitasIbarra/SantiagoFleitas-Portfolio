
"use client";

import { useState } from 'react';
import { summarizeCredential, type SummarizeCredentialInput } from '@/ai/flows/credential-summary';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Loader2, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CredentialSummaryProps {
  credentialText: string;
  title: string;
}

export function CredentialSummary({ credentialText, title }: CredentialSummaryProps) {
  const { t } = useLanguage();
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    setIsOpen(true);
    try {
      const input: SummarizeCredentialInput = { credentialText };
      const result = await summarizeCredential(input);
      setSummary(result.summary);
    } catch (e) {
      console.error("Error summarizing credential:", e);
      setError(t('aiSummaryError'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleSummarize} variant="outline" size="sm" className="bg-transparent hover:bg-accent/20 border-accent text-accent hover:text-accent-foreground">
        <Brain className="mr-2 h-4 w-4" />
        {t('aiSummaryButton')}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-headline text-accent">{t('aiSummaryModalTitle')}: {title}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {isLoading && (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-6 w-6 animate-spin text-accent" />
                <p>{t('aiSummaryLoading')}</p>
              </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {summary && <p className="text-sm text-foreground/80 whitespace-pre-wrap">{summary}</p>}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                {t('close')}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
