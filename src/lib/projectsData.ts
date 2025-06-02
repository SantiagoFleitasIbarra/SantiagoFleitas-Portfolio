
import type { translations } from './translations';

export type ProjectTech = 'HTML5' | 'CSS3' | 'JavaScript' | 'React.js' | 'Node.js' | 'Python' | 'MySQL' | 'MongoDB' | 'Git' | 'Docker' | 'Figma' | 'Jira' | 'Flutter' | 'Firebase' | 'Tailwind CSS';

export interface Project {
  id: string;
  titleKey: keyof typeof translations;
  longDescriptionKey: keyof typeof translations;
  techStackRaw: ProjectTech[];
  imageUrl: string;
  imageAiHint: string;
  repoUrl?: string;
  liveUrl?: string;
  demoDayUrl?: string;
  statusKey?: keyof typeof translations;
}

export const projects: Project[] = [
  {
    id: 'ibaeduca',
    titleKey: 'projectIbaEducaTitle',
    longDescriptionKey: 'projectIbaEducaDescription',
    techStackRaw: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'], // Assumed tech
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'online course platform',
    statusKey: 'projectStatusWorking',
  },
  {
    id: 'cazapalabras',
    titleKey: 'projectCazaPalabrasTitle',
    longDescriptionKey: 'projectCazaPalabrasDescription',
    techStackRaw: ['JavaScript', 'HTML5', 'CSS3'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'word game interface',
    repoUrl: '#', // Replace with actual URL
    liveUrl: '#', // Replace with actual URL
  },
  {
    id: 'inglesdivertido',
    titleKey: 'projectInglesDivertidoTitle',
    longDescriptionKey: 'projectInglesDivertidoDescription',
    techStackRaw: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'language learning app',
    repoUrl: '#', // Replace with actual URL
    liveUrl: '#', // Replace with actual URL
  },
  {
    id: 'organizatudia',
    titleKey: 'projectOrganizaTuDiaTitle',
    longDescriptionKey: 'projectOrganizaTuDiaDescription',
    techStackRaw: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'to-do list app',
    repoUrl: '#', // Replace with actual URL
    liveUrl: '#', // Replace with actual URL
  },
  {
    id: 'warded',
    titleKey: 'projectWardedTitle',
    longDescriptionKey: 'projectWardedDescription',
    techStackRaw: ['Flutter', 'Firebase', 'Jira', 'Figma'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'mobile community safety',
    demoDayUrl: '#', // Replace with actual YouTube URL
  },
  {
    id: 'calculadora',
    titleKey: 'projectCalculadoraTitle',
    longDescriptionKey: 'projectCalculadoraDescription',
    techStackRaw: ['JavaScript', 'HTML5', 'CSS3'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'calculator interface',
    repoUrl: '#', // Replace with actual URL
    liveUrl: '#', // Replace with actual URL
  },
];

    