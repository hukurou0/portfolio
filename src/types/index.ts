export interface Link {
  referenceType: 'project' | 'article' | 'talk'
  referenceId: number
}

export interface Links {
  description?: string
  links: Link[]
}


export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  link?: string // 後方互換性のため一時的に残す
  links?: Links // 共通リンクへの参照
}

export interface Article {
  id: number
  title: string
  description: string
  link?: string // 後方互換性のため一時的に残す
  links?: Links // 共通リンクへの参照
  date: string
  tags: string[]
}

export interface Talk {
  id: number
  title: string
  event: string
  description: string
  slideUrl?: string // 後方互換性のため一時的に残す
  links?: Links // 共通リンクへの参照
  date: string
}