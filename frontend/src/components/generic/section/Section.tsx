import './Section.css'

import { useEffect, useState } from 'react'
import { Alert, Box, CircularProgress } from '@mui/material'
import { IAuthor, isAuthor } from '../../../interfaces/author.interface'
import { SectionItem } from '../section-item/SectionItem'
import { IBook, isBook } from '../../../interfaces/book.interface'
import { IGenre, isGenre } from '../../../interfaces/genre.interface'

export const Section = <T extends unknown>(props: SectionProps<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { title, items, loading, error, itemImageSize, itemsPath } = props

  useEffect(() => {
    if (isLoading != loading) setIsLoading(loading)
  }, [loading])

  return (
    <div className="section">
      <h2>{title}</h2>
      {isLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && error && (
        <Box sx={{ display: 'flex' }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      {!isLoading && !error && items && RenderItems(items, itemImageSize, itemsPath)}
    </div>
  )
}

const RenderItems = (items: unknown, imageSize: number, path: string) => {
  if (Array.isArray(items)) {
    if (isGenre(items[0])) {
      return (
        <div className="carousel">
          {items.map((item: IGenre) => (
            <SectionItem
              key={item.id}
              itemId={item.id}
              imageUrl={'https://www.filmsite.org/images/drama-genre.jpg'}
              imageSize={imageSize}
              text1={`${item.name}`}
              path={path}
            />
          ))}
        </div>
      )
    }
    if (isAuthor(items[0])) {
      return (
        <div className="carousel">
          {items.map((item: IAuthor) => (
            <SectionItem
              key={item.id}
              itemId={item.id}
              imageUrl={item.imageUrl}
              imageSize={imageSize}
              text1={`${item.name} ${item.surname}`}
              path={path}
            />
          ))}
        </div>
      )
    }
    if (isBook(items[0])) {
      return (
        <div className="carousel">
          {items.map((item: IBook) => (
            <SectionItem
              imageUrl={item.coverImageUrl}
              imageSize={imageSize}
              itemId={item.id}
              text1={item.title}
              text2={item?.subtitle}
              path={path}
            />
          ))}
        </div>
      )
    }
  }
}

export interface SectionProps<T> {
  title: string
  items?: T | null
  loading: boolean
  error: string | null
  itemImageSize: number
  itemsPath: string
}
