import { httpClient } from "./httpClient"

export const getMenu  = async() => {
    const response = await httpClient.get('/api/menu')
    return response.data
}

export const getCategory  = async(category: string) => {
    const res = await httpClient.get(`api/menu?category=${category}`)
    return res.data
}