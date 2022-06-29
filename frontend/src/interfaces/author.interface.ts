export interface IAuthor {
  id: number
  name: string
  surname: string
  bio: string
  imageUrl: string
}

export const isAuthor = (obj: any): obj is IAuthor => {
  return obj && obj.id && typeof obj.surname === 'string'
}
