import {
  Button,
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
} from '@mui/material'
import BookIcon from '@mui/icons-material/Book'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import VisibilityIcon from '@mui/icons-material/Visibility'

export const ListItem = (props: ListItemProps) => {
  const { textPrimary, textSecondary } = props

  const handleAddToCart = () => {}

  return (
    <MUIListItem
      secondaryAction={
        <>
          <Button variant="text" endIcon={<AddShoppingCartIcon />} color="secondary">
            Add To Cart
          </Button>
          <Button variant="text" endIcon={<VisibilityIcon />} color="secondary">
            View
          </Button>
        </>
      }
    >
      <MUIListItemIcon>
        <BookIcon />
      </MUIListItemIcon>
      <MUIListItemText primary={textPrimary} secondary={textSecondary} />
    </MUIListItem>
  )
}

export interface ListItemProps {
  textPrimary: string
  textSecondary?: string
}
