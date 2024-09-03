import { observer } from 'mobx-react-lite'
import { formatNumber } from '../../../shared/functions/formatters'
import { productStore } from '../../../store/products-store/products-store'
import s from './index.module.scss'

export const Catalog = observer(() => {
	const { productsList, addProductToCart } = productStore

	return (
		<div className={s.main}>
			<div className={s.top}>

			</div>

			<div className={s.bot}>
				{productsList?.map((item, index) => (
					<div
						key={index}
						className={s.tovar}
					>
						<div className={s.tovarcontainer}>
							<div className={s.top}>
								<span className={s.title}>{item.title}</span>
							</div>

							<div className={s.mid}>
								<span className={s.description}>
									{item.description}
								</span>
								<span>Цена: {formatNumber(item.price, '.')} {item.value}</span>
								<span>Скидка: {item.sale}%</span>
							</div>
						</div>

						<div className={s.bot}>
							<div className={s.btns}>
								<button
									onClick={() => addProductToCart(item)}
								>Добавить в корзину</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
})