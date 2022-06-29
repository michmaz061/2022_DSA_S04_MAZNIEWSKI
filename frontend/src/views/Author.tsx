import {Page} from '../components/generic/page/Page'
import {authorPageMock} from '../mocks/author-page'
import {useAxios} from "../hooks/use-axios";
import {ApiResponse} from "../interfaces/api-response.interface";
import {IAuthor} from "../interfaces/author.interface";
import {apiClient} from "../adapters/api-client";

export const Author = () => {
  const urlAuthorId = window.location.pathname.split('/')[2]

  const [response, error, loading] = useAxios<IAuthor>({
    axiosInstance: apiClient,
    url: `authors/${urlAuthorId}`,
    method: 'GET',
    autoExecute: true,
  })

  return (
    <Page
      imageURL={response?.imageUrl}
      title={`${response?.name} ${response?.surname}`}
      description={`Short Bio: ${response?.bio}`}
    />
  )
}
