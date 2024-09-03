import { observer } from 'mobx-react-lite'
import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { NotFoundIcon } from '../../../assets/icons/NotFoundIcon'
import { cartStore } from '../../../store/cart-store/cart-store'
import s from './index.module.scss'

export const Cart = observer(() => {
	const { cartList, removeItemFromCart } = cartStore

	return (
		<div className={s.main}>
			<span className={s.title}>Список добавленных товаров в корзине:</span>
			{cartList.length == 0 && (
				<div className={s.nothing}>
					<span>Ты еще не добавил товаров в корзину</span>
					<NotFoundIcon />
				</div>
			)}
			<div className={s.cartlist}>
				{cartList.map((item, index) => {
					return (
						<div
							className={s.item}
							key={index}
						>
							<span>{item.title}</span>
							<button
								onClick={() => removeItemFromCart(item)}
							>
								<DeleteIcon size={20} color='red' />
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
})