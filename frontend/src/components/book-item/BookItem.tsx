import { Book } from '../../mocks/user'
import '../../styles/BookList.css'

export default function BookItem(props: { book: Book; date: string }) {
  return (
    <div className="bookInList">
      <div className="bookInList__image">
        <img src={props.book.imageUrl} alt="book" />
      </div>
      <div className="bookInList__info">
        <h3>
          <strong>{props.book.title}</strong>
        </h3>
        <p>{props.book.author}</p>
        <p>{props.book.isbn13}</p>
        <p>${props.book.price}</p>
        <p>Bought: {props.date}</p>
      </div>
    </div>
  )
}
