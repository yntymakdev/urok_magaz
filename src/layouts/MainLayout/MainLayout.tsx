import { Outlet } from 'react-router-dom'
import { NavBar } from '../../widgets/Main/NavBar/NavBar'
import { SideBar } from '../../widgets/Main/SideBar/SideBar'
import s from './index.module.scss'

export const MainLayout = () => {
	return (
		<div className={s.main}>

			<div className={s.container}>
				{/* NAVBAR */}
				<div className={s.top}>
					<NavBar />
				</div>

				<div className={s.bot}>

					{/* SIDEBAR */}
					<div className={s.left}>
						<SideBar />
					</div>

					{/* OTHER ROUTES */}
					<div className={s.right}>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}