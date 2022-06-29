export interface SignUpRequest {
  name: string | undefined
  surname: string | undefined
  username: string | undefined
  email: string | undefined
  password: string | undefined
}

export interface SignUpResponse {
  id: number
  name: string
  surname: string
  username: string
  email: string
  joinedAt: string
  lastUpdated: string
}
