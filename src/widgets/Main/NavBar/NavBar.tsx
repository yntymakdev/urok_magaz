import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import s from './index.module.scss'

export const NavBar = observer(() => {
	return (
		<div className={s.main}>
			<div className={s.left}>
				<span>asd</span>
			</div>

			<div className={s.right}>
				<Link
					to={'/main/catalog'}
				>
					Каталог
				</Link>

				<Link
					to={'/main/cart'}
				>
					Корзина
				</Link>

				<Link
					to={'/main/profile'}
				>
					Профиль
				</Link>
			</div>
		</div>
	)
})