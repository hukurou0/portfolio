export interface Project {
  id: number
  title: string
  description: string
  role: string
  techStack: string[]
  link: string
  image: string
  learnings?: string
}

export interface Article {
  id: number
  title: string
  description: string
  link: string
  date: string
  tags: string[]
}

export interface Talk {
  id: number
  title: string
  event: string
  description: string
  slideUrl: string
  date: string
}