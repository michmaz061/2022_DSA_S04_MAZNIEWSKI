export interface IBook {
  id: number
  title: string
  subtitle: string
  coverImageUrl: string
  publisher: string
}

export const isBook = (obj: any): obj is IBook => {
  return obj && obj.id && typeof obj.title === 'string'
}
