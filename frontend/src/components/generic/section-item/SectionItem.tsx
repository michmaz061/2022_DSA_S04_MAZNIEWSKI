import {Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

export const SectionItem = (props: SectionItemProps) => {
  return (
    <div className="item">
      <Card sx={{width: 200, margin: 1}} variant="outlined">
        <CardContent>
          <Box sx={{align_items: 'center'}}>
            {renderAvatar(props.imageUrl, props.imageSize)}
            {renderText(props.text1, 'h6')}
            {props.text2 && renderText(props.text2, 'body1')}
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={`/${props.path}/${props.itemId}`}>See More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const renderAvatar = (imageUrl: string, size: number) => {
  return <Avatar src={imageUrl} sx={{width: size, height: size, margin: 'auto'}}/>
}

const renderText = (text: string, type: 'h6' | 'body1') => {
  return (
    <Typography sx={{textAlign: 'center'}} variant={type} gutterBottom component="div">
      {text}
    </Typography>
  )
}

export interface SectionItemProps {
  imageUrl: string
  imageSize: number
  itemId: number
  text1: string
  text2?: string
  path: string
}
