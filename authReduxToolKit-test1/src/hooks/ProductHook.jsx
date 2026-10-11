import { useQuery } from "@tanstack/react-query"
import { getProductsData } from "../api/productApi"


export const useProductApi = () => {
    let { isPending, data, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProductsData,
        staleTime: 5000,
    })



    return {
        isPending,
        data,
        error
    }
} 