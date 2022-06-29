import { useEffect, useState } from 'react'
import { Alert, Box, CircularProgress, IconButton, Typography } from '@mui/material'
import { List as MUIList } from '@mui/material'
import { ListItem, ListItemProps } from '../list-item/ListItem'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export const List = (props: ListProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { title, items, loading, error } = props

  useEffect(() => {
    if (isLoading !== loading) setIsLoading(loading)
  }, [loading])

  return (
    <>
      <Typography variant="h2" component="div" gutterBottom>
        {title}
      </Typography>
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
      {!isLoading && !error && items && (
        <MUIList>
          {items.map(item => (
            <ListItem textPrimary={item.textPrimary} textSecondary={item.textSecondary} />
          ))}
        </MUIList>
      )}
    </>
  )
}

export interface ListProps {
  title: string
  items: ListItemProps[] | undefined
  loading: boolean
  error: string | null
}
