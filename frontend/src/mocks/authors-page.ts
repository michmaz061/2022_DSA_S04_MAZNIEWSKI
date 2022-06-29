import {PageProps} from "../components/generic/page/Page";
import {IAuthor} from "../interfaces/author.interface";
import {authorMock, authorsMock} from "./author";

export const authorsPageMock: PageProps<IAuthor[]> = {
  title: "Authors",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut ',
  sections: [
    {
      title: 'All Authors:',
      items: [authorMock],
      itemImageSize: 120,
      loading: false,
      error: null,
      itemsPath: 'authors',
    },
    {
      title: 'Best Selling Authors:',
      items: null,
      itemImageSize: 120,
      loading: false,
      error: 'boi we aint doing good',
      itemsPath: 'authors',
    },
    {
      title: 'Loading Authors',
      items: null,
      itemImageSize: 120,
      loading: true,
      error: null,
      itemsPath: 'authors',
    }
  ]
}
