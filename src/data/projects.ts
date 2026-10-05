export type ProjectCategory = 'AI / ML' | 'Full Stack' | 'Personal'

export interface Project {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'Personal'>
  personal?: boolean
  description: string
  tags: string[]
  image: string
  imageAlt: string
  icon: string
  accent: 'primary' | 'tertiary'
  href?: string
}

export const projects: Project[] = [
  {
    id: 'resumerag',
    title: 'ResumeRag',
    category: 'AI / ML',
    personal: true,
    description:
      'Multimodal RAG system for resumes that ingests documents, retrieves across text and visual context, and answers hiring questions with grounded citations.',
    tags: ['Python', 'RAG', 'Multimodal', 'FastAPI'],
    image: '/ResumeRag.png',
    imageAlt: 'ResumeRag multimodal resume retrieval interface',
    icon: 'document_search',
    accent: 'primary',
    href: 'https://github.com/KavyaRajeevs/rag-api',
  },
  {
    id: 'brightminds',
    title: 'BrightMinds',
    category: 'AI / ML',
    description:
      'AI-powered learning app specifically designed for autistic children, leveraging Reinforcement Learning (RL) and Gemini for personalized educational pathways.',
    tags: ['Python', 'React', 'ML', 'GenAI'],
    image:
      '/Brightminds.png',
    imageAlt: 'BrightMinds AI learning interface visualization',
    icon: 'auto_awesome',
    accent: 'primary',
    href: 'https://github.com/KavyaRajeevs'
  },
  {
    id: 'facesketcher',
    title: 'FaceSketcher: Turn words to faces',
    category: 'AI / ML',
    description:
      'Generative portrait system that translates natural-language prompts into stylized facial sketches using deep learning pipelines and prompt-conditioned diffusion.',
    tags: ['Python', 'BERT', 'NLP', 'LAGAN'],
    image:'/FaceSketcher.png',
    imageAlt: 'FaceSketcher generative portrait sketch interface',
    icon: 'face_retouching_natural',
    accent: 'primary',
    href: 'https://github.com/KavyaRajeevs/FACESKETCHER'
  },
  {
    id: 'college-store',
    title: 'College Store Management',
    category: 'Full Stack',
    description:
      'A comprehensive e-commerce platform for educational institutions featuring secure Google OAuth, Razorpay integration, and intelligent content-based filtering.',
    tags: ['Node.js', 'OAuth', 'Payment'],
    image:
      '/College-store (1).png',
    imageAlt: 'College Store Management e-commerce dashboard',
    icon: 'shopping_cart',
    accent: 'tertiary',
    href: 'https://github.com/KavyaRajeevs'
  },
]
