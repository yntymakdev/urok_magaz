
import { makeAutoObservable } from "mobx"
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { globalCatalogs } from '../../shared/data/globalData'
import { cartStore } from '../cart-store/cart-store'
import { ProductListT } from './types'

class ProductsStore {
	constructor() { makeAutoObservable(this) }

	productsList: ProductListT[] = globalCatalogs.map((item) => {
		return { ...item, id: nanoid() }
	})

	addProductToCart = (tovar: ProductListT) => {
		const { cartList } = cartStore
		toast.success(`Товар ${tovar.title} был успешно добавлен в корзину`, {
			autoClose: 1.7 * 1000,
			position: 'bottom-right'
		})
		cartList.push(tovar)
	}

}

export const productStore = new ProductsStore()
