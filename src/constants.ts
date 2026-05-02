export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
  thumbnail: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'minimal-sanctuary',
    title: 'Minimal Sanctuary',
    category: 'Residential',
    year: '2024',
    description: 'A quiet retreat nestled in the hills, focusing on raw materials and natural light. Every element is intentional, creating a space for reflection and calm.',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600607687960-4a2123f7411b?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000'
    ],
    featured: true
  },
  {
    id: 'urban-monolith',
    title: 'Urban Monolith',
    category: 'Commercial',
    year: '2023',
    description: 'Redefining the modern office space through concrete textures and expansive glass. A study in architectural strength and functional elegance.',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000'
    ],
    featured: true
  },
  {
    id: 'velvet-nights',
    title: 'Velvet Nights',
    category: 'Hospitality',
    year: '2024',
    description: 'Low-lit elegance for a boutique hotel bar in the heart of London. Rich textures and moody lighting cultivate an atmosphere of exclusive intimacy.',
    thumbnail: 'https://images.unsplash.com/photo-1574091213054-34176707324c?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1574091213054-34176707324c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000'
    ],
    featured: true
  },
  {
    id: 'dawn-loft',
    title: 'Dawn Loft',
    category: 'Residential',
    year: '2023',
    description: 'A sun-drenched industrial conversion where open-plan living meets warm wooden accents. Designed to evolve with its inhabitants.',
    thumbnail: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=2000'
    ],
    featured: false
  },
  {
    id: 'sculpted-life',
    title: 'Sculpted Life',
    category: 'Residential',
    year: '2022',
    description: 'Art-focused interiors where every furniture piece is a sculpture. A living gallery space for one of the city\'s most prominent collectors.',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000'
    ],
    featured: false
  }
];
