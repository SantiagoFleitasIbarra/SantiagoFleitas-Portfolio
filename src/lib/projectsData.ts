
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
    techStackRaw: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: '/images/projects/ibaeduca.png',
    imageAiHint: 'online course platform',
    statusKey: 'projectStatusWorking',
  },
  {
    id: 'cazapalabras',
    titleKey: 'projectCazaPalabrasTitle',
    longDescriptionKey: 'projectCazaPalabrasDescription',
    techStackRaw: ['JavaScript', 'HTML5', 'CSS3'],
    imageUrl: '/images/projects/cazapalabras.png',
    imageAiHint: 'word game interface',
    repoUrl: 'https://github.com/SantiagoFleitasIbarra/CazaPalabras-Juego-2025',
    liveUrl: 'https://santiagofleitasibarra.github.io/CazaPalabras-Juego-2025/',
  },
  {
    id: 'inglesdivertido',
    titleKey: 'projectInglesDivertidoTitle',
    longDescriptionKey: 'projectInglesDivertidoDescription',
    techStackRaw: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: '/images/projects/ingles-divertido.png',
    imageAiHint: 'language learning app',
    repoUrl: 'https://github.com/SantiagoFleitasIbarra/ingles-divertido',
    liveUrl: 'https://santiagofleitasibarra.github.io/ingles-divertido/',
  },
  {
    id: 'organizatudia',
    titleKey: 'projectOrganizaTuDiaTitle',
    longDescriptionKey: 'projectOrganizaTuDiaDescription',
    techStackRaw: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: '/images/projects/gestor-tareas.png',
    imageAiHint: 'to-do list app',
    repoUrl: 'https://github.com/SantiagoFleitasIbarra/Organiza-tu-dia',
    liveUrl: 'https://santiagofleitasibarra.github.io/Organiza-tu-dia/',
  },
  {
    id: 'warded',
    titleKey: 'projectWardedTitle',
    longDescriptionKey: 'projectWardedDescription',
    techStackRaw: ['Flutter', 'Firebase', 'Jira', 'Figma'],
    imageUrl: '/images/projects/warded.png',
    imageAiHint: 'mobile community safety',
    demoDayUrl: 'https://www.youtube.com/watch?v=Lfbt74-kG8c',
  },
];

    