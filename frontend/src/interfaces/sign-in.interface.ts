export interface SignInRequest {
  username: string | undefined
  password: string | undefined
}

export interface SignInResponse {
  accessToken: string
}
