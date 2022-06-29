import {IAuthor} from "../interfaces/author.interface";

export const authorMock: IAuthor = {
  id: 1,
  name: 'John',
  surname: 'Smith',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  imageUrl: 'https://cdn.discordapp.com/attachments/948362388166561822/979368824719687690/atlas.png',
};

export const authorsMock: IAuthor[] = [
  authorMock,
  authorMock,
  authorMock,
  authorMock
];
