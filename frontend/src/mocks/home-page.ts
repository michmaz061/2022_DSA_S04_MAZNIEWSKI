import {PageProps} from "../components/generic/page/Page";
import {IAuthor} from "../interfaces/author.interface";
import {booksMock} from "./book";
import {IBook} from "../interfaces/book.interface";

export const homePageMock: PageProps<IBook[]> = {
  title: 'Home',
  description: 'moj polski jest bradzo fajne',
  sections: [
    {
      title: 'New Books!',
      items: booksMock,
      loading: false,
      error: null,
      itemImageSize: 120,
      itemsPath: 'books',
    },
    {
      title: 'Best Selling Authors',
      items: booksMock,
      loading: false,
      error: null,
      itemImageSize: 120,
      itemsPath: 'books',
    }
  ]
}