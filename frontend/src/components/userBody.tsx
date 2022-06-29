import { Card, CardContent, Grid } from '@mui/material'
import BookList from './book-list/BookList'
import UserInfo from './userInfo'
import '../styles/UserBody.css'

export default function UserBody() {
  return (
    <div className="mainBody">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <UserInfo />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card variant="outlined">
            <CardContent>
              <h3>Purchased Books:</h3>
              <BookList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
