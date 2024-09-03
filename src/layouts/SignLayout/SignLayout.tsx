import { Outlet } from 'react-router-dom'
import s from './index.module.scss'

export const SignLayout = () => {
	return (
		<div className={s.main}>

			<div className={s.left}></div>

			<div className={s.right}>
				<Outlet />
			</div>

		</div>
	)
}