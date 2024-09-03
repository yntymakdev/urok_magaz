import { observer } from 'mobx-react-lite'
import s from './index.module.scss'

export const SideBar = observer(() => {
	return (
		<div className={s.main}>
			<span>SideBar</span>
		</div>
	)
})