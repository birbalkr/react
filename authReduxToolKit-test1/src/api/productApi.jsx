import { axiosInstance } from "../config/axiosInstance"

export let getProductsData = async () => {
    let res = await axiosInstance.get('/products')
    if (!Array.isArray(res.data?.products)) {
        throw new Error('Invalid products response')
    }
    return res.data.products
}