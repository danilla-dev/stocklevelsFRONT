import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'

export const useProductsContext = () => {
	const context = useContext(ProductsContext)
	if (!context) {
		throw Error('useProductsContext must be used inside an ProductsContextProvider')
	}
	return context
}