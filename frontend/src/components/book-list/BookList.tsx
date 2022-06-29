import BookItem from '../book-item/BookItem'
import { userPageMock } from '../../mocks/user'
import React from 'react'
import { Card, CardContent } from '@mui/material'
import '../../styles/BookList.css'

export default function BookList() {
  let toReturn = []
  for (let i = 0; i < userPageMock.purchaseHistory.purchases.length; i++) {
    toReturn.push(
      <Card className="bookCard" variant="outlined">
        <CardContent>
          <BookItem
            book={userPageMock.purchaseHistory.purchases[i].book}
            date={userPageMock.purchaseHistory.purchases[i].date}
          />
        </CardContent>
      </Card>
    )
  }
  return <div className="bookList">{toReturn}</div>
}
