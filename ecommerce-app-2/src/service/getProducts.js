import { axiosInstance } from "./apiCall"

export const getProducts = async () => {
    const response = await axiosInstance('products')
    return response
}