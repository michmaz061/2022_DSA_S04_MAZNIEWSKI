import {PageProps} from "../components/generic/page/Page";
import {IGenre} from "../interfaces/genre.interface";
import {genreMock} from "./genreMock";

export const genresPageMock: PageProps<IGenre[]> = {
  title: 'Genres',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
  sections: [
    {
      title: 'All Genres',
      loading: false,
      items: [genreMock],
      error: null,
      itemImageSize: 120,
      itemsPath: 'genres',
    }
  ]
};