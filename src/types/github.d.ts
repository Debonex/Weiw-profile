interface User {
  name: string
  bio: string
  avatarUrl: string
  repositories: RepositoryConnection
}

interface RepositoryConnection {
  nodes: Repository[]
}

interface Repository {
  name: string
  languages: LanguageConnection
}

interface LanguageConnection {
  edges: LanguageEdge[]
}

interface LanguageEdge {
  size: number
  node: Language
}

interface Language {
  name: string
  id: string
  color: string
}
