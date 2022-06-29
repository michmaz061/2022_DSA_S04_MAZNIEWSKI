import { Page } from '../components/generic/page/Page'
import { homePageMock } from '../mocks/home-page'

export const Home = () => {
  return <Page title={homePageMock.title} description={homePageMock.description} sections={homePageMock.sections} />
}
