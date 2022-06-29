import { Section, SectionProps } from '../section/Section'
import './Page.css'
import { Avatar, Typography } from '@mui/material'
import { List, ListProps } from '../list/List'

export const Page = <T extends unknown>(props: PageProps<T>) => {
  const { imageURL, sections, lists } = props

  return (
    <div className="page">
      <header>
        {imageURL && <Avatar src={imageURL} sx={{ width: 120, height: 120, margin: 2 }} />}
        <Typography variant="h2" component="div" gutterBottom>
          {props.title}
        </Typography>
        <span className="description">{props.description}</span>
      </header>
      {sections?.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          items={section.items}
          loading={section.loading}
          error={section.error}
          itemImageSize={section.itemImageSize}
          itemsPath={section.itemsPath}
        />
      ))}
      {lists?.map((list: ListProps) => (
        <List title={list.title} items={list.items} loading={list.loading} error={list.error} />
      ))}
    </div>
  )
}

export interface PageProps<T> {
  imageURL?: string
  title: string
  description: string
  sections?: SectionProps<T>[]
  lists?: ListProps[]
}
