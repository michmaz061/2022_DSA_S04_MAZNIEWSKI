import '../components/generic/page/Page.css'

import { useAxios } from '../hooks/use-axios'
import { ApiResponse } from '../interfaces/api-response.interface'
import { IBook } from '../interfaces/book.interface'
import { apiClient } from '../adapters/api-client'
import { Page } from '../components/generic/page/Page'
import { ListProps } from '../components/generic/list/List'

export const Books = () => {
  const [response, error, loading] = useAxios<ApiResponse<IBook[]>>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'books',
    autoExecute: true,
  })

  const books: ListProps = {
    title: 'All Books',
    items: response?.data.map(i => {
      return { textPrimary: i.title, textSecondary: i.publisher }
    }),
    loading,
    error,
  }

  return <Page title="Books" description="Lorem ipsum dolor sit amet" lists={[books]} />
}
