import { makeAutoObservable } from "mobx"
import { ProductListT } from '../products-store/types'

class CartStore {
	constructor() { makeAutoObservable(this) }

	cartList: ProductListT[] = []

	removeItemFromCart = (product: ProductListT) => {
		const filteredList: ProductListT[] = this.cartList.filter((item) => item.id != product.id)
		this.cartList = filteredList
	}

}

export const cartStore = new CartStore()