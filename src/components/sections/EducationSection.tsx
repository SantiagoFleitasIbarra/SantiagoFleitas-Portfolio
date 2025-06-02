
"use client";

import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CredentialSummary } from '@/components/common/CredentialSummary';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { educationDataRaw } from '@/lib/translations';
import { BookOpen, CalendarDays, CheckSquare, Download, University, School } from 'lucide-react';

interface EducationItemProps {
  date: string;
  statusKey?: keyof typeof import('@/lib/translations').translations;
  titleKey: keyof typeof import('@/lib/translations').translations;
  institutionKey: keyof typeof import('@/lib/translations').translations;
  descriptionKey: keyof typeof import('@/lib/translations').translations;
  pointsKeys?: (keyof typeof import('@/lib/translations').translations)[];
  certificateLink?: string;
  aiSummaryCredentialKey: keyof typeof educationDataRaw;
  icon: React.ElementType;
}

const EducationItem = ({
  date,
  statusKey,
  titleKey,
  institutionKey,
  descriptionKey,
  pointsKeys,
  certificateLink,
  aiSummaryCredentialKey,
  icon: Icon,
}: EducationItemProps) => {
  const { t, language } = useLanguage();
  const credentialText = educationDataRaw[aiSummaryCredentialKey][language];

  return (
    <div className="relative pl-10 md:pl-12 py-6 group">
      {/* Timeline line */}
      <div className="absolute left-2 md:left-3 top-0 bottom-0 w-0.5 bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-0.5 top-8 w-5 h-5 md:w-6 md:h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:border-accent transition-colors duration-300">
        <Icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>

      <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-accent flex items-center">
          <CalendarDays className="w-4 h-4 mr-2" /> {date}
        </p>
        {statusKey && (
          <span className="mt-1 sm:mt-0 text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
            {t(statusKey)}
          </span>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-headline font-semibold text-foreground mb-1">{t(titleKey)}</h3>
      <p className="text-md text-muted-foreground mb-3">{t(institutionKey)}</p>
      <p className="text-sm text-foreground/80 mb-3">{t(descriptionKey)}</p>
      {pointsKeys && (
        <ul className="list-disc list-inside space-y-1 mb-3 text-sm text-foreground/80">
          {pointsKeys.map(pointKey => <li key={pointKey.toString()}>{t(pointKey)}</li>)}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 items-center"> {/* Added items-center here */}
        {certificateLink && (
          <Button variant="outline" size="sm" asChild className="bg-primary/10 border-primary text-primary hover:bg-primary/20">
            <a href={certificateLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 w-4 h-4" /> {t('educationViewCertificate')}
            </a>
          </Button>
        )}
        <CredentialSummary credentialText={credentialText} title={t(titleKey)} />
      </div>
    </div>
  );
};

export function EducationSection() {
  const { t } = useLanguage();

  const educationHistory: EducationItemProps[] = [
    {
      date: `2025 - ${t('educationTimelineDatePresent')}`,
      titleKey: 'educationUdelarEngTitle',
      institutionKey: 'educationUdelarEngInstitution',
      descriptionKey: 'educationUdelarEngDesc',
      pointsKeys: ['educationUdelarEngPoint1', 'educationUdelarEngPoint2', 'educationUdelarEngPoint3', 'educationUdelarEngPoint4'],
      aiSummaryCredentialKey: 'udelarEng',
      icon: University,
    },
    {
      date: `2025 - ${t('educationTimelineDatePresent')}`,
      titleKey: 'educationUdelarAdminTitle',
      institutionKey: 'educationUdelarAdminInstitution',
      descriptionKey: 'educationUdelarAdminDesc',
      aiSummaryCredentialKey: 'udelarAdmin',
      icon: University,
    },
    {
      date: "2023 - 2024",
      statusKey: 'educationHolbertonStatus',
      titleKey: 'educationHolbertonTitle',
      institutionKey: 'educationHolbertonInstitution',
      descriptionKey: 'educationHolbertonDesc',
      pointsKeys: ['educationHolbertonPoint1', 'educationHolbertonPoint2', 'educationHolbertonPoint3'],
      certificateLink: "#", // Placeholder
      aiSummaryCredentialKey: 'holberton',
      icon: School,
    },
    {
      date: "2021 - 2022",
      titleKey: 'educationIPATitle',
      institutionKey: 'educationIPAInstitution',
      descriptionKey: 'educationIPADesc',
      pointsKeys: ['educationIPAPoint1', 'educationIPAPoint2', 'educationIPAPoint3', 'educationIPAPoint4'],
      aiSummaryCredentialKey: 'ipa',
      icon: BookOpen,
    },
  ];

  return (
    <SectionWrapper id="education">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-6">{t('educationTitle')}</h2>
      <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
        {t('educationDescription')}
      </p>
      <div className="relative max-w-3xl mx-auto">
        {/* This div creates the main vertical timeline bar if items don't perfectly align for their own lines */}
        {/* <div className="absolute left-2 md:left-3 top-0 bottom-0 w-0.5 bg-primary/30 z-0"></div> */}
        {educationHistory.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}

    