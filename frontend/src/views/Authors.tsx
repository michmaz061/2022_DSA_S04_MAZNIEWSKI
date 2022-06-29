import {apiClient} from '../adapters/api-client'
import {useAxios} from '../hooks/use-axios'
import {IAuthor} from '../interfaces/author.interface'
import {SectionProps} from '../components/generic/section/Section'
import {Page} from '../components/generic/page/Page'
import {authorsPageMock} from '../mocks/authors-page'
import {ApiResponse} from '../interfaces/api-response.interface'

export const Authors = () => {
  const [response1, error1, loading1] = useAxios<ApiResponse<IAuthor[]>>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'authors',
    autoExecute: true,
  })

  const [response2, error2, loading2] = useAxios<ApiResponse<IAuthor[]>>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'authors',
    autoExecute: true,
    requestConfig: {
      sortBy: 'is_popular',
      order: 'DESC',
    },
  })

  const [response3, error3, loading3] = useAxios<ApiResponse<IAuthor[]>>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'authors',
    autoExecute: true,
    requestConfig: {
      sortBy: 'is_best-seller',
      order: 'DESC',
    },
  })

  const section1: SectionProps<IAuthor[]> = {
    title: 'All Authors',
    items: response1?.data,
    loading: loading1,
    error: error1,
    itemImageSize: 120,
    itemsPath: 'authors',
  }

  const section2: SectionProps<IAuthor[]> = {
    title: 'Popular Authors',
    items: response2?.data,
    loading: loading2,
    error: error2,
    itemImageSize: 120,
    itemsPath: 'authors',
  }

  const section3: SectionProps<IAuthor[]> = {
    title: 'Best Selling Authors',
    items: response3?.data,
    loading: loading3,
    error: error3,
    itemImageSize: 120,
    itemsPath: 'authors',
  }

  return (
    <Page
      title={authorsPageMock.title}
      description={authorsPageMock.description}
      sections={[section1, section2, section3]}
    />
  )
}
