import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const dataFromAPI = await response.json()
      setData(dataFromAPI)
      setLoading(false)
    }

    fetchData()
  }, [url])

  return { data, loading }
}