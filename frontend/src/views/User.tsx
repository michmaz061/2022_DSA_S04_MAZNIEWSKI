import UserBody from '../components/userBody'
import UserHead from '../components/userHead'
import '../styles/UserPage.css'
import { useAxios } from '../hooks/use-axios'
import { IUser } from '../interfaces/user.interface'
import { apiClient } from '../adapters/api-client'

export default function User() {
  const [userInfoReq, userInfoError, userInfoLoading] = useAxios<IUser>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'user',
    autoExecute: true,
  })

  return (
    <div className="userPage">
      <div className="cont">
        <UserHead />
        <UserBody />
      </div>
    </div>
  )
}
