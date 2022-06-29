export interface IGenre {
  id: number
  name: string
  description: string
}

export const isGenre = (obj: any): obj is IGenre => {
  return obj && obj.id && typeof obj.description === 'string'
}
