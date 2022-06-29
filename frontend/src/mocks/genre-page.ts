import {PageProps} from "../components/generic/page/Page";
import {booksMock} from "./book";
import {IBook} from "../interfaces/book.interface";

export const genrePageMock: PageProps<IBook[]> = {
  title: "Genre: Biographies",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
    ' cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  sections: [
    {
      title: 'Popular Biographies',
      items: booksMock,
      loading: false,
      error: null,
      itemImageSize: 120,
      itemsPath: 'books',
    },
    {
      title: 'Best-Sellers',
      items: booksMock,
      loading: false,
      error: null,
      itemImageSize: 120,
      itemsPath: 'books',
    },
  ]
}