import { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react'

export const useAxios = <T>(config: AxiosHookConfig): [T | null, string | null, boolean, (body?: any) => void] => {
  const { axiosInstance, method, url, autoExecute, requestConfig = {} } = config
  const [response, setResponse] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const controller = new AbortController()
  const fetchData = async (body?: any) => {
    try {
      setLoading(true)
      // @ts-ignore
      const res = await axiosInstance[method.toLowerCase()](url, body, {
        ...requestConfig,
        signal: controller.signal,
      })
      setResponse(res.data)
    } catch (err) {
      // @ts-ignore
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (autoExecute) {
      fetchData()
    }
    return () => controller.abort()
  }, [])

  return [response, error, loading, fetchData]
}

interface AxiosHookConfig {
  axiosInstance: AxiosInstance
  method: string
  url: string
  autoExecute: boolean
  requestConfig?: any
}
